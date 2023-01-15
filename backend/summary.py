import requests
from flask import Flask, jsonify
import nlpcloud
app = Flask(__name__)


# flask --app index run

# return the entire page (html)
@app.get("/summarized/<stringtext>")
def get_article(stringtext: str):
    client = nlpcloud.Client("bart-large-cnn", "b064200011562b9e156c5188f5f9faee9793e7c1")
    result = client.summarization(stringtext)
    print(result)
    return jsonify({"result": str})
    

if __name__ == "__main__":
    app.run(debug=True, port=8002)
