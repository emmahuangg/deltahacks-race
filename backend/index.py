import requests
from bs4 import BeautifulSoup
from flask import Flask

app = Flask(__name__)

# flask --app index run


@app.get("/waterloo")
def get_article():
    response = requests.get(
        url="https://en.wikipedia.org/wiki/University_of_Waterloo",
    )
    soup = BeautifulSoup(response.content, 'html.parser')

    content= soup.prettify()
    return content


if __name__ == "__main__":
    app.run(debug=True, port=8001)
