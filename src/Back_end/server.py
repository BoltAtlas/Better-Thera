from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        # Process user_message and get your bot's response
        # You can replace this with your actual chatbot logic
        bot_response = "Hello! I'm your chatbot. You said: {}".format(user_message)

        response = {'answer': bot_response}
        return jsonify(response), 200
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
