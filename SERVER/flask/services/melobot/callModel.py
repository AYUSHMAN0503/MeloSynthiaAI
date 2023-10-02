import re

# Define your patterns and responses using regular expressions
pattern_responses = {
    r"hi": ["Hi there!"],
    r"hello": ["Hello!"],
    r"hey": ["Hi, MeloBot this side, whats up?"],
    r"what can you do": ["I can help you with music recommendations, tell you about things which can be done on melosynthia and can clarify your doubts regarding this AI"],
    r"what can melobot do": ['I can tell you about NFTs', 'I am but a robot after all'],
    r'(how are you|how are you doing)': ['I am good, thank you!', 'I am just a chatbot, but I am fine.'],
    r'what can you do': ['I can help you generate music, create NFTs of generated lyrics, and provide music-related recommendations. Just ask me!'],
    r'(how do you know what music to recommend to me)': ['I use machine learning algorithms to analyze your music preferences and past listening habits. The more you interact with me and provide feedback, the better I can fine-tune my recommendations.'],
    r"can you suggest new and trending songs or artists": ['Absolutely! I can keep you updated on the latest music releases, popular artists, and trending tracks in various genres.'],
    r'who created MeloSynthia': ['Team Web3 Sailors created melosynthia'],
    r'what type of nfts does melosynthia make': ['Musical NFTs'],
    r'who is the greatest football player in the world?': ['Lionel Messi is considered the greatest player to play the game of football'],
    r'how can I generate music': ["You can generate music by giving a prompt text as an input and selecting your preferences, then simply press enter. The music+lyrics will generate automatically afterward."],
    r'how can I make NFTs of my generated lyrics': ["After generating, simply click on the NFT button to make it as an NFT and list them in our marketplace."],
    r'give me an example prompt for how can I generate professional tunes': ["Various prompt examples are:\n1. Create a 90's pop culture music with drum beats\n2. Combine American style beats with Indian music\n3. Generate lyrics in Taylor Swift's style on ambient music tunes"],
}

# Function to find a matching pattern and return the corresponding response
def melobot(user_input):
    for pattern, responses in pattern_responses.items():
        if re.search(pattern, user_input, re.IGNORECASE):
            return responses[0]
    return "I'm sorry, I don't understand. You can ask me about generating music, making NFTs, or for general information."




def test_chatbot_responses():
    test_cases = [
        ("hi", ["Hello!", "Hi there!", "Hey!", "Hi, MeloBot this side, what's up?"]),
        ("what can you do", ["I can help you generate music, create NFTs of generated lyrics, and provide music-related recommendations. Just ask me!"]),
        ("how are you", ["I am good, thank you!", "I am just a chatbot, but I am fine."]),
        ("who created MeloSynthia", ["team web3 sailors created melosynthia"]),
        ("what type of nfts does melosynthia make", ["musical nfts"]),
        ("who is greatest footballer player in the world", ["Lionel Messi is considered as the greatest player to play the game of football"]),
        ("how can I generate music", ["You can generate music by giving a prompt text as an input and selecting your preferences and then simply press enter. The music+lyrics will generate automatically afterwards."]),
        ("non-matching query", ["I'm sorry, I don't understand. You can ask me about generating music or for general information."]),
    ]

    for user_input, expected_responses in test_cases:
        chatbot_response = melobot(user_input)
        print(f"User Input: {user_input}")
        print(f"Expected Responses: {expected_responses}")
        print(f"Chatbot Response: {chatbot_response}")
        print("=" * 40, end="\n\n")

if __name__ == "__main__":
    test_chatbot_responses()