import requests
from bs4 import BeautifulSoup
from flask import Flask

app = Flask(__name__)

# flask --app index run


@app.route("/page/<term>")
def get_article(term):
    PARAMS = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": term
    }

    response = requests.get(
        url="https://en.wikipedia.org/w/api.php",
        params=PARAMS
    )

    data = response.json()
    return data


if __name__ == "__main__":
    app.run(debug=True, port=8001)
