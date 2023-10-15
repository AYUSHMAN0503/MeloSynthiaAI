import os
import sys
import time
import json
import pickle
import shutil
import requests
import datetime
from uuid import uuid4 
from flask import send_file
from threading import Thread
from gradio_client import Client



# Define response constants
SUCCESS = "success"
ERROR = "error"
PENDING = "pending"

def check_for_music(uuid: str):
		music_path = f"Music/{uuid}"
		if os.path.exists(music_path):
				return SUCCESS
		elif os.path.exists(f"Music/{uuid}_error"):
				return ERROR
		else:
				return PENDING


def wait_for_gradio(filename: str, **kwargs):
    try:
        # Configure Gradio Client
        client_args = {
            "src": "https://artorias1-musicgen.hf.space/",
            "output_dir": f"Music/{filename}"
        }
        client = Client(**client_args)

        # Perform Gradio prediction
        start_time = time.time()
        response = client.predict(*kwargs.values(), fn_index=1)
        end_time = time.time()

        print(f"--> {filename} success")
        print(f"--> {filename} duration: {end_time - start_time:.2f} seconds")

        stats = {
            "genTime": end_time - start_time,
            "model": kwargs.get("model", None),
            "text": kwargs.get("text", None),
            "audio": kwargs.get("audio", None),
            "duration": kwargs.get("duration", None),
            "top_k": kwargs.get("top_k", None),
            "top_p": kwargs.get("top_p", None),
            "temperature": kwargs.get("temperature", None),
            "classifier_free_guidance": kwargs.get("classifier_free_guidance", None)
        }

        filepath = f"Music/{filename}/stats.json"
        with open(filepath, 'w') as json_file:
            json.dump(stats, json_file)

    except Exception as e:
        print(f"--x {filename} failed, Error: {str(e)}")
        error_dir = f"{client_args['output_dir']}_error"

        # Create an error folder if it doesn't exist
        if not os.path.exists(error_dir):
            os.makedirs(error_dir)

    finally:
        sys.exit(0)

def wait_for_gradio_facebook_model(filename:str, **kwargs):
  try:
    client_args = {
            "src": "https://facebook-musicgen.hf.space/",
            "output_dir": f"Music/{filename}"
    }
    predict_args = [
      kwargs.get("text", "Howdy!"),
      kwargs.get("audio", "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav"),
    ]

    client = Client(**client_args)
    
    start_time = time.time()
    result = client.predict(*predict_args, fn_index=0)
    end_time = time.time()

    print(f"--> {filename} success")
    print(f"--> {filename} duration: {end_time - start_time:.2f} seconds")

    stats = {
            "genTime": end_time - start_time,
            "model": kwargs.get("model", None),
            "text": kwargs.get("text", None),
            "audio": kwargs.get("audio", None),
            "duration": kwargs.get("duration", None),
            "top_k": kwargs.get("top_k", None),
            "top_p": kwargs.get("top_p", None),
            "temperature": kwargs.get("temperature", None),
            "classifier_free_guidance": kwargs.get("classifier_free_guidance", None)
        }

    filepath = f"Music/{filename}/stats.json"
    with open(filepath, 'w') as json_file:
        json.dump(stats, json_file)

  except Exception as e: 
    print(f"--x {filename} failed, Error: {str(e)}")
    error_dir = f"{client_args['output_dir']}_error"

    # Create an error folder if it doesn't exist
    if not os.path.exists(error_dir):
        os.makedirs(error_dir)


def predict_generation_time(duration: float) -> float:
    # # Load the trained model from the specified file path
    # module_dir = os.path.dirname(__file__)
    # model_file_path = os.path.join(module_dir, './Models/duration_analysis.pkl')

    # with open(model_file_path, 'rb') as model_file:
    #     loaded_model = pickle.load(model_file)

    # # Make predictions using the loaded model
    # generation_time_prediction = loaded_model.predict([[duration]])[0]

    # # Print the prediction (you can remove this if not needed)
    # print(f"Predicted Generation Time: {generation_time_prediction:.2f} seconds")
    # return generation_time_prediction
    # new modal have different appraoch of constant time
    return 50
	

def initiate_request(**kwargs):
    try:
        # Generate a unique filename using UUID
        filename = str(uuid4())
        print(f"--> filename req initiated: {filename}")

        duration = kwargs["duration"]        
        generation_time = predict_generation_time(duration)
        print(f"--> generation time: {generation_time}")

        # Start a new thread to wait for Gradio
        # Thread(target=wait_for_gradio, args=(filename,), kwargs=kwargs).start()
        Thread(target=wait_for_gradio_facebook_model, args=(filename,), kwargs=kwargs).start()

        # Return a response with the predicted time, filename, and status
        response = {
            "halt": generation_time,
            "filename": filename,
            "status": 200
        }
        return response
    except Exception as e:
        # Handle exceptions gracefully and log them
        print(f"Error: {e}")
        response = {
            "error": str(e),
            "status": 500
        }
        return response


def remove_old_items(directory_path):
    print("---> checking for old items: ")
    current_time = datetime.datetime.now()
    ten_minutes_ago = current_time - datetime.timedelta(minutes=10)

    
    for item in os.listdir(directory_path):
        item_path = os.path.join(directory_path, item)
        print(f"--> checking {item_path}")
        # Check if the item is a file or directory
        if os.path.isfile(item_path) or os.path.islink(item_path) or os.path.isdir(item_path):
            item_mtime = datetime.datetime.fromtimestamp(os.path.getmtime(item_path))

            # Compare the modification time with ten minutes ago
            if item_mtime < ten_minutes_ago:
                print(f"--> {item_path} is old")
                if os.path.isfile(item_path) or os.path.islink(item_path):
                    os.remove(item_path)  # Remove files or symbolic links
                    print(f"Removed file: {item_path}")
                elif os.path.isdir(item_path):
                    shutil.rmtree(item_path)  # Remove non-empty directories
                    print(f"Removed directory: {item_path}")



def predictMusic(model: str, text: str, audio: str, duration: int | float, top_k: int | float, top_p: int | float, temperature: int | float, classifier_free_guidance: int | float):
    client = Client("https://artorias1-musicgen.hf.space/")
    result = client.predict(
        model,  # str  in 'Model' Radio component
        text,  # str  in 'Input Text' Textbox component
        audio,  # str (filepath or URL to file) in 'File' Audio component
        # int | float (numeric value between 1 and 120) in 'Duration' Slider component
        duration,
        top_k,  # int | float  in 'Top-k' Number component
        top_p,  # int | float  in 'Top-p' Number component
        temperature,  # int | float  in 'Temperature' Number component
        classifier_free_guidance,  # int | float  in 'Classifier Free Guidance' Number component
        fn_index=1
    )
    return result


# Example usage:
if __name__ == "__main__":
  print("start", __name__)