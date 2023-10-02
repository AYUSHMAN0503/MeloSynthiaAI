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