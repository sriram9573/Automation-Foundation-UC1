from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    url = data.get('url')
    keyword = data.get('keyword')
    
    # You can implement the search logic here, for now, we'll return a sample response.
    return jsonify({
        'message': f'Searching for {keyword} in {url}'
    })

if __name__ == '__main__':
    app.run(debug=True)
