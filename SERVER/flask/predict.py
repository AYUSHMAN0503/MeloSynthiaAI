from flask import Flask, request, jsonify
# import model here


app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # get data from request
        data = request.get_json(force=True)

        # do something with data
        print(data)


        # return response
        return jsonify({
          'song': "This is generated song.",
          'query': data['query']
          })
        
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=7000, debug=True)
