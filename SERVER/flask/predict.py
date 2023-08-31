from flask import Flask, request, send_file
import os

app = Flask(__name__)

allowed_ips = ['127.0.0.1', '192.168.1.1']  # Add the IP addresses you want to allow

@app.before_request
def restrict_ips():
    client_ip = request.remote_addr
    if client_ip not in allowed_ips:
        return abort(403)  # Forbidden

@app.route('/predict', methods=['POST'])  # Change this line to accept only POST requests
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

if __name__ == '__main__':
    app.run(port=7000, debug=True)

