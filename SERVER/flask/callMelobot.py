import spacy
from spacy.matcher import Matcher
import re

nlp = spacy.load("en_core_web_sm")

# Pattern-response pairs for the chatbot
patterns = [
    (r'(hi|hello|hey|hola)', ['Hello!', 'Hi there!', 'Hey!', 'Hi, MeloBot this side, what\'s up?']),
    (r'(what can you do|what can melobot do)', ['I can help you with music recommendations, tell you about things which can be done on melosynthia and can clarify your doubts regarding this ai', 'I can tell you about NFTs', 'I am but a robot after all']),
    (r'(how are you|how are you doing)', ['I am good, thank you!', 'I am just a chatbot, but I am fine.']),
    (r'what can you do', ['I can help you generate music, create NFTs of generated lyrics, and provide music-related recommendations. Just ask me!']),
    (r'(how do you know what music to recommend to me)', ['I use machine learning algorithms to analyze your music preferences and past listening habits. The more you interact with me and provide feedback, the better I can fine-tune my recommendations.']),
    (r'(can you suggest new and trending songs or artists)', ['Absolutely! I can keep you updated on the latest music releases, popular artists, and trending tracks in various genres.']),
    (r'who created MeloSynthia', ['team web3 sailors created melosynthia']),
    (r'what type of nfts does melosynthia makes', ['musical nfts']),
    (r'who is greatest footballer player in the world?', ['Lionel Messi is considered as the greatest player to play the game of football']),
    (r'how can I generate music', [" You can generate music by giving a prompt text as an input and selecting your preferences and then simply press enter. The music+lyrics will generate automatically afterwards."]),
    (r'how can I make nfts of my generated lyrics', ["After generating, By simply clicking on the nft button you can make it as an NFT and list them in our marketplace."]),
    (r'give me an example prompt for how can I generate professional tunes', [" Various prompt examples are:\n1. A 90's pop culture music with drum beats\n2. American style beats with Indian music\n3. Taylor Swift's style of lyrics on ambient music tunes"]),
    (r'(.*)', ["I'm sorry, I don't understand. You can ask me about generating music or for general information."]),
]

matcher = Matcher(nlp.vocab)

for pattern, responses in patterns:
    pattern_tokens = [{"TEXT": {"REGEX": pattern}}]
    matcher.add(pattern,[pattern_tokens])  

# Function to chat with the user
def get_chatbot_response(user_input):
    doc = nlp(user_input)
    matches = matcher(doc)
    if matches:
        match_id, _, _ = matches[0]
        response = patterns[match_id][1]  #responses for the matched pattern
    else:
        response = ["I'm sorry, I don't understand. You can ask me about generating music, making NFTs, or for general information."]
    return response[0]

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
        chatbot_response = get_chatbot_response(user_input)
        print(f"User Input: {user_input}")
        print(f"Expected Responses: {expected_responses}")
        print(f"Chatbot Response: {chatbot_response}")
        print("=" * 40)

if __name__ == "__main__":
    test_chatbot_responses()
