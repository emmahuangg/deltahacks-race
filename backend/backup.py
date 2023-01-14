import requests
from bs4 import BeautifulSoup
from flask import Flask

app = Flask(__name__)


# flask --app index run


@app.get("/page/<term>")
def get_article(term: str):
    # clean the data in front-end, replace " " with "_"
    # term = term.replace(" ", "_")

    response = requests.get(
        url="https://en.wikipedia.org/wiki/" + term,
    )
    soup = BeautifulSoup(response.content, 'html.parser')
    # get the body only
    content = soup.find(id="mw-content-text")

    # content = soup.prettify()
    content = content.prettify()
    print(content)
    return content


if __name__ == "__main__":
    app.run(debug=True, port=8001)
