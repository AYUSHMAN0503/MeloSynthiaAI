from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import os
from services.lyrics_gen.callModel import predictLyrics
from services.music_gen.callModel import predictMusic, initiate_request, check_for_music
from services.melobot.callMelobot import get_chatbot_response

app = Flask(__name__)

application = app

# allowed_ips = ['127.0.0.1', '192.168.1.1']  # Add the IP addresses you want to allow
# # allowed_ips = ['192.168.1.1']  # Add the IP addresses you want to allow

# @app.before_request
# def restrict_ips():
#     print("requesting ip: ", request.remote_addr)
#     client_ip = request.remote_addr
#     if client_ip not in allowed_ips:
#         return abort(403)  # Forbidden


# Change this line to accept only POST requests
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the POST request.
        data = request.get_json(force=True)
        print(data)

        # Construct the path to the music file
        music_file_path = 'Music/bach.mp3'

        # Check if the music file exists
        if not os.path.exists(music_file_path):
            return "Music file not found", 404

        # Return the music file as a response
        return send_file(music_file_path, as_attachment=False)

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500


@app.route('/getGradioMusic', methods=['POST'])
def get_gradio_music():
    try:
        data = request.get_json(force=True)

        model = data.get("model")
        text = data.get("text")
        audio = data.get("audio")
        duration = data.get("duration")
        top_k = data.get("top_k")
        top_p = data.get("top_p")
        temperature = data.get("temperature")
        classifier_free_guidance = data.get("classifier_free_guidance")

        print(model, text, audio, duration, top_k, top_p,
              temperature, classifier_free_guidance)

        response = predictMusic(model, text, audio, duration,
                                top_k, top_p, temperature, classifier_free_guidance)
        print("-> response: ", response)

        if not os.path.exists(response):
            return "Music file not found", 404

        return send_file(response, as_attachment=False)

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500


@app.route('/generateMusic', methods=['POST'])
def generate_music():
    try:
        data = request.get_json(force=True)
        print(data)
        kwargs = {
          "model": data.get("model"),
          "text": data.get("text"),
          "audio": data.get("audio"),
          "duration": data.get("duration"),
          "top_k": data.get("top_k"),
          "top_p": data.get("top_p"),
          "temperature": data.get("temperature"),
          "classifier_free_guidance": data.get("classifier_free_guidance")
        }

        print(kwargs)

        music_gen_token = initiate_request(**kwargs)

        print("-> filename: ", music_gen_token["filename"])

        return jsonify(music_gen_token)

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500

@app.route('/checkUpdate', methods=['POST'])
def check_update():
    try:
        filename = request.json.get('filename')
        print(f"Checking filename: {filename}")
        
        result = check_for_music(filename)
        if result == "success":
            print("File found")
            folder_path = f"Music/{filename}"
            sub_folders = os.listdir(folder_path)
            
            if len(sub_folders) == 1:
                music_folder_path = os.path.join(folder_path, sub_folders[0])
                if len(os.listdir(music_folder_path)) == 1:
                    music_file_path = os.path.join(music_folder_path, os.listdir(music_folder_path)[0])
                    print("-> music_file_path: ", music_file_path)
                    return send_file(music_file_path, as_attachment=False)
                else :
                    return {'error': "Something went wrong"}, 400
                
            else:
                return {'error': "Something went wrong"}, 400

        elif result == "error":
            print("File error")
            return {'error': "Something went wrong"}, 400

        elif result == "pending":
            print("File pending")
            return jsonify({"message": "pending"})

        else:
            print("File not found")
            return jsonify({"message": "not ready"})

    except Exception as e:
        print(f"Error: {str(e)}")
        return {'error': str(e)}, 500


@app.route('/melobot', methods=['POST'])
def chatbot_response_endpoint():
    user_message = request.json.get('message')
    print("==>", user_message)  
    chatbot_response = get_chatbot_response(user_message)
    print("==>", chatbot_response)
    return jsonify({'message': chatbot_response})


@app.route('/getLyrics', methods=['POST'])
def getLyrics():
    try:
        data = request.get_json(force=True)

        text = data.get("text")
        key = data.get("key")
        if text is None:
            return "No text provided", 404

        print(text)

        response = predictLyrics(text, key)
        print("-> response: ", response)

        return response

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500



if __name__ == '__main__':
    app.run(port=7000, debug=True)
    CORS(app, origins=["http://localhost:5173", "http://localhost:5000"])
