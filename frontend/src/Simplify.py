# documentation: https://pypi.org/project/textstat/

from datamuse import Datamuse
from PyDictionary import PyDictionary
dictionary = PyDictionary()

api = Datamuse()

vocab = {}


def handleword(word):
    if (len(api.words(sp=word, md='f', max=1)) == 0):
        return "<strong>" + word + "</strong>"
    frequency = api.words(sp=word, md='f', max=1)[0]['tags'][0][2:]
    syllables = api.words(sp=word, md='s', max=1)[0]['numSyllables']
    if ((float(syllables))/float(frequency) >= 0.2):
        # word_def = api.words(sp=word, md='d', max=1)[0]['defs']
        # print(word_def)
        vocab.update({word: dictionary.meaning(word)})
        return "<span class='need-definition'>" + word + "</span>"
    return word


# text = "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent."
text = "Agriculture or farming is the practice of cultivating plants and livestock. "

# summarize text using an API...

left = 0
right = 0
word = ""
output = ""

while (right < len(text)):
    if ((not text[right].isalpha()) and (not (text[right] == "'"))):
        word = text[left:right]
        if (word[0] == " "):
            word = word[1:]
            output += " "
        if (right - left > 7):
            word = handleword(word)
        output += word
        output += text[right]
        right = right+1
        left = right
    right = right+1

word = text[left:]
if (right - left > 5):
    word = handleword(word)
output += word

# return these - output is annotated text, vocab is map of hard-words to defs
print(output)
print(vocab)
