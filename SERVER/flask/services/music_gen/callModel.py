import os
import sys
import requests
from gradio_client import Client
from threading import Thread
from uuid import uuid4 
from flask import send_file
import pickle



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
        response = client.predict(*kwargs.values(), fn_index=1)
        print(f"--> {filename} success")

    except Exception as e:
        print(f"--x {filename} failed, Error: {str(e)}")
        error_dir = f"{client_args['output_dir']}_error"

        # Create an error folder if it doesn't exist
        if not os.path.exists(error_dir):
            os.makedirs(error_dir)

    finally:
        sys.exit(0)



def initiate_request(**kwargs):
    # Generate a unique filename using UUID
    filename = str(uuid4())
    print(f"Generated filename: {filename}")

    # Predict the model generation time (You can replace this with your actual prediction logic)
    predicted_time = 10

    # Start a new thread to wait for Gradio
    Thread(target=wait_for_gradio, args=(filename,), kwargs=kwargs).start()

    # Return a response with the predicted time, filename, and status
    response = {
        "message": predicted_time,
        "filename": filename,
        "status": 200
    }
    
    return response



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







