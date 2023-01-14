import requests
from bs4 import BeautifulSoup
from flask import Flask
from html2text import html2text

app = Flask(__name__)


# flask --app index run

# return the entire page (html)
@app.get("/pageHTML/<term>")
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
    return content


# only return the most important summary text (html)
@app.get("/summaryHTML/<term>")
def get_first_paragraph_html(term: str):
    # clean the data in front-end, replace " " with "_"
    # term = term.replace(" ", "_")

    response = requests.get(
        url="https://en.wikipedia.org/wiki/" + term,
    )
    soup = BeautifulSoup(response.content, 'html.parser')

    # get the first paragraph
    post_first_paragraph = soup.find("div", id="toc")
    first_paragraph = post_first_paragraph.find_previous_siblings("p")

    response = "<div class='first-paragraph'>"
    for i in first_paragraph:
        response += str(i)
    response += "</div>"
    print(response)
    return response


# only return the most important summary text (plain text)
@app.get("/summary/<term>")
def get_first_paragraph_text(term: str):
    # clean the data in front-end, replace " " with "_"
    # term = term.replace(" ", "_")

    response = requests.get(
        url="https://en.wikipedia.org/wiki/" + term,
    )
    soup = BeautifulSoup(response.content, 'html.parser')

    # get the first paragraph
    post_first_paragraph = soup.find("div", id="toc")
    first_paragraph = post_first_paragraph.find_previous_siblings("p")

    response = ""
    is_addable = True
    print(first_paragraph)
    for i in first_paragraph:
        i = str(i)
        for char in i:
            if char == "<" or char == "[":
                is_addable = False
            elif char == ">" or char == "]":
                is_addable = True
            elif is_addable:
                response += char

    return response




if __name__ == "__main__":
    app.run(debug=True, port=8001)
