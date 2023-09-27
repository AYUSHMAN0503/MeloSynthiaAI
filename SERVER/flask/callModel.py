import requests
from gradio_client import Client

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



def predictLyrics(payload: str, key: str):
    API_URL = "https://api-inference.huggingface.co/models/ECE1786-AG/lyrics-generator"
    headers = {"Authorization": f'Bearer {key}'}
    print("-> payload: ", payload)
    print("-> headers: ", headers)

    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()
	
if __name__ == "__main__":
    output = predictLyrics({
        "inputs": "twinkle twinkle little star",
    })

    print(output)