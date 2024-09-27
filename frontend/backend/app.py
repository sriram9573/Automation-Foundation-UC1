from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app) 

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    url = data.get('url')
    keyword = data.get('keyword')
    
    if not url or not keyword:
        return jsonify({'message': 'Invalid input. Please provide both URL and keyword.'}), 400
    
    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            if keyword.lower() in response.text.lower():
                message = f'Successfully found the keyword "{keyword}" in "{url}".'
                return jsonify({'message': message}), 200
            else:
                return jsonify({'message': f'Could not find the keyword "{keyword}" in "{url}".'}), 404
        else:
            return jsonify({'message': 'Could not retrieve data from the URL. Please check the URL.'}), 400
    except requests.exceptions.RequestException as e:
        return jsonify({'message': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
