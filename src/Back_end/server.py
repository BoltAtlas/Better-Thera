from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        bot_response = "Hello! I'm your chatbot."
        response = {'answer': bot_response}
        return jsonify(response), 200
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
