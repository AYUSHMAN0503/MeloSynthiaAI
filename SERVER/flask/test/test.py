import requests
import csv
import time
import logging

# Configure logging
logging.basicConfig(filename='api_test.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Define the list of queries and the API URL
queries = [
    "Take this jazz music file and remix it with a modern jazz style, adding some piano improvisations.",
    "Transform this pop song into an electro-pop fusion track, incorporating synthesizers and electronic beats.",
    "Convert this orchestral piece into a classical orchestra arrangement with strings, woodwinds, and brass instruments.",
    "Remix this hip-hop track, infusing it with fresh beats, samples, and a dynamic rap verse.",
    "Take this energetic rock song and create an ambient chillout version, emphasizing atmospheric textures and calming rhythms."
]

api_url = "http://127.0.0.1:5000/music/getGradioMusic"

# Create a dictionary to store the data
data_dict = {query: [] for query in queries}

# Iterate through queries
for query in queries:
    for i in range(1, 6):  # Duration from 1s to 5s
        try:
            # Set the request body with the query and a duration value
            request_body = {
                "model": "melody",
                "text": query,
                "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
                "duration": i,
                "top_k": 50,
                "top_p": 0.7,
                "temperature": 0.8,
                "classifier_free_guidance": 5
            }

            # Make the API request and measure the duration
            start_time = time.time()
            logging.info(f"Making request to {api_url} with query: {query} at {start_time} for duration {request_body['duration']} seconds")
            response = requests.post(api_url, json=request_body)
            logging.info(f"Response: {response.status_code}")
            end_time = time.time()
            duration = end_time - start_time

            # Extract the music duration from the API response
            response_data = response.json()
            music_duration = i

            # Add the music duration and total duration to the data_dict
            data_dict[query].append(f"{i}s ({duration:.2f}s)")

            # Print updates to the console after each request
            print(f"Query: {query}, Music Duration: {i} seconds, Total Duration: {duration:.2f} seconds")
        except Exception as e:
            logging.error(f"Error occurred: {str(e)}")
            # Print error to the console
            print(f"Error occurred: {str(e)}")

# Write the data to the CSV file
with open("api_duration.csv", mode="w", newline="") as csv_file:
    writer = csv.writer(csv_file)
    
    # Write the header row with durations
    writer.writerow(["Query"] + [f"{i}s" for i in range(1, 6)])
    
    # Write data for each query
    for query, durations in data_dict.items():
        writer.writerow([query] + durations)
