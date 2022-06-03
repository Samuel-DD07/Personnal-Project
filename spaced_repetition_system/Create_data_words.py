import requests
from random import choice
from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator

def Create_data():
    url = 'https://strommeninc.com/1000-most-common-words-in-english-strommen-languages/'
    page = requests.get(url).content
    soup = BeautifulSoup(page, 'html.parser')
    content = soup.find('div', class_='elementor-text-editor elementor-clearfix').ol
    tabWords = content.findAll('li')

    ListWords = []
        
    for word in tabWords:
        ListWords.append(word.text)

    ListWordsForSRS = []

    for i in range(10):
        ListWordsForSRS.append(choice(ListWords))

    dicoWord = {}

    for word in ListWordsForSRS:
        dicoWord[word] = GoogleTranslator(source='auto', target='fr').translate(word)

    fichier = open('data.json', 'w')
    fichier.write(str(dicoWord))
    fichier.close()