import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify
from pytube import YouTube, Search
import nlpcloud

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
    return jsonify({"result": content})


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
    first_paragraph.reverse()

    response = "<div class='first-paragraph'>"
    for i in first_paragraph:
        response += str(i)
    response += "</div>"
    return jsonify({"result": response})


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
    first_paragraph.reverse()

    response = ""
    is_addable = True
    for i in first_paragraph:
        i = str(i)
        for char in i:
            if char == "<" or char == "[":
                is_addable = False
            elif char == ">" or char == "]":
                is_addable = True
            elif is_addable:
                response += char

    return jsonify({"result": response})


# return the image url of a term
@app.get("/image/<term>")
def get_image(term: str):
    # clean the data in front-end, replace " " with "_"
    # term = term.replace(" ", "_")
    response = requests.get(
        url="https://en.wikipedia.org/wiki/" + term,
    )
    soup = BeautifulSoup(response.content, 'html.parser')
    content = soup.find(id="mw-content-text")

    # get the first image
    image = content.find("img")

    return jsonify({"result": "https:"+image["src"]})


# return Youtube video of a term
@app.get("/video/<term>")
def get_video(term: str):
    s = Search(term).results
    response = []
    for i in range(min(6,len(s))):
        response.append(s[i].video_id)
    return jsonify({"result": response})


# return simplified
@app.get("/summarized/<stringtext>")
def get_summarized(stringtext: str):
    client = nlpcloud.Client(
        "bart-large-cnn", "b064200011562b9e156c5188f5f9faee9793e7c1")
    result = client.summarization(stringtext)
    return jsonify({"result": result})



# return simplified version of a paragraph
@app.get("/simplify/<text>")
def get_simplified(text: str):
    s = simplify(text)
    return jsonify({"result": s})





if __name__ == "__main__":
    app.run(debug=True, port=8001)

