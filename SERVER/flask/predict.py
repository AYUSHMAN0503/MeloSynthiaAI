import os
import json
from flask_cors import CORS
from flask import Flask, abort, request, send_file, jsonify
from services.lyrics_gen.callModel import predictLyrics
from services.melobot.callModel import melobot
from services.music_gen.callModel import predictMusic, initiate_request, check_for_music, SUCCESS, ERROR, PENDING, remove_old_items

application = Flask(__name__)



allowed_ips = ['127.0.0.1', '192.168.1.1']  # Add the IP addresses you want to allow
# allowed_ips = ['192.168.1.1']  # Add the IP addresses you want to allow

@application.before_request
def restrict_ips():
    print("requesting ip: ", request.remote_addr)
    client_ip = request.remote_addr
    if client_ip not in allowed_ips:
        return abort(403)  # Forbidden


@application.route('/gradio', methods=['POST'])
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

@application.route('/generate_music', methods=['POST'])
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

        # print(kwargs)

        music_gen_token = initiate_request(**kwargs)

        print("-> filename: ", music_gen_token["filename"])

        return jsonify(music_gen_token)

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500

@application.route('/music', methods=['GET'])
def check_update():
    try:
        # filename = request.json.get('filename')
        filename = request.args.get('filename')
        print(f"\n\nChecking filename: {filename}")
        
        result = check_for_music(filename)
        print("-> result: ", result)
        if result == SUCCESS:
            print("File found")
            folder_path = f"Music/{filename}"
            sub_folders = os.listdir(folder_path)

            for item in sub_folders:
                item_path = os.path.join(folder_path, item)
                if os.path.isdir(item_path):
                    music_file_path = os.path.join(item_path, os.listdir(item_path)[0])
                    return send_file(music_file_path, as_attachment=False)

            return {'message': "No music in folder, possibly music is'nt generating in model", 'status': 400, 'error': False}, 400

        elif result == ERROR:
            print("File error")
            return {'message': "Issue in generation / fetching music from gradio", 'status': 500, 'error': True}, 500

        elif result == PENDING:
            print("File pending / No such file found")
            return {'message': "pending", 'status': 400, 'error': False}, 400

    except Exception as e:
        print(f"Error: {str(e)}")
        return {'error': str(e), 'status': 500}

@application.route('/stats', methods=['GET'])
def get_stats():
    try:
        filename = request.args.get('filename')
        print(f"Checking filename: {filename}")

        result = check_for_music(filename)
        print("-> result: ", result)
        if result == SUCCESS:
            print("File found")
            folder_path = f"Music/{filename}"

            stats_file_path = os.path.join(folder_path, "stats.json")
            with open(stats_file_path) as json_file:
                stats = json.load(json_file)
                
            remove_old_items("./Music/")
            
            return jsonify(stats)

        elif result == ERROR:
            print("File error")
            return {'error': "Something went wrong"}, 400

        elif result == PENDING:
            print("File pending")
            return jsonify({"message": "pending"})

        else:
            print("File not found")
            return jsonify({"message": "not ready"})
    except Exception as e:
        print(f"Error: {str(e)}")
        return {'error': str(e)}, 500

@application.route('/melobot', methods=['POST'])
def chatbot_response_endpoint():
    user_message = request.json.get('message')
    print("==> user_message: ", user_message)  
    chatbot_response = melobot(user_message)
    print("==> user_response: ", chatbot_response)
    return jsonify({'message': chatbot_response})

@application.route('/lyrics', methods=['POST'])
def getLyrics():
    try:
        data = request.get_json(force=True)

        text = data.get("text")
        key = data.get("key")
		
        print(text)

        response = predictLyrics(text, key)
        print("-> response: ", response)

        return response, 200

    except Exception as e:
        print("Error:", str(e))
        return {'error': str(e)}, 500


if __name__ == '__main__':
    application.run(port=7000, debug=True)
    CORS(application, origins=["https://melosynthiaai.vercel.app/" , "https://melo-synthia-ai-lxn7.vercel.app/"])
