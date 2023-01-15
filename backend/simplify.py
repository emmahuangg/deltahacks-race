from datamuse import Datamuse
from PyDictionary import PyDictionary

dictionary = PyDictionary()
api = Datamuse()
vocab = {}


def handleword(cur_word):
    frequency = api.words(sp=cur_word, md='f', max=1)
    syllables = api.words(sp=cur_word, md='s', max=1)
    if len(frequency) == 0 or len(syllables) == 0 or len(frequency[0]['tags']) == 0:
        return "<span class='need-definition'>" + cur_word + "</span>"
    frequency = frequency[0]['tags'][0][2:]
    syllables = syllables[0]['numSyllables']
    if (float(syllables)) / float(frequency) >= 0.2:
        vocab.update({cur_word: dictionary.meaning(cur_word)})
        definition = dictionary.meaning(cur_word)
        definition_string = ""
        for typing, defList in definition.items():
            definition_string += typing + ": "
            definition_string += ", ".join(defList)
        return "<span class='need-definition' title='" + definition_string + "'>" + cur_word + "</span>"
    return cur_word


# text = "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent."
# text = "Agriculture or farming is the practice of cultivating plants and livestock. "

# summarize text using an API...


def simplify(text:str):
    left = 0
    right = 0
    word = ""
    output = ""

    while right < len(text):
        # print(str(left) + " " + str(right) + " " + word)
        if (not text[right].isalpha()) and (not (text[right] == "'")):
            word = text[left:right]
            if len(word) > 0 and word[0] == " ":
                word = word[1:]
                output += " "
            if right - left > 7:
                word = handleword(word)
            output += word
            if not right >= len(text):
                output += text[right]
            right = right + 1
            left = right
        else:
            right = right + 1

    word = text[left:]
    if right - left > 5:
        word = handleword(word)
    output += word

    # return these - output is annotated text, vocab is map of hard-words to defs
    return output
    # print(vocab)

# print(simplify("Agriculture or farming is the practice of cultivating plants and livestock. "))