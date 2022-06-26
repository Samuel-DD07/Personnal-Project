from turtle import st
import requests
from bs4 import BeautifulSoup
import json
import names
import random
from flask import Flask


# Create names to propose others answer for the playeur
def GeneratorName(n):
    tabName = []
    for i in range(n):
        tabName.append(names.get_full_name())
    return tabName


# Take the picture of the celebrity in Wikipédia Website
def ScrappingPicture(nom):
        url = "https://fr.wikipedia.org/wiki/" + nom.replace(" ", "_")
        requete = requests.get(url)
        page = requete.content
        soup = BeautifulSoup(page, "html.parser" )
        try :
            imgPicture = soup.find("a", class_="image").img
            if int(imgPicture["width"]) >= 200:
                urlWiki = imgPicture["src"]
                urlPicture = "https:" + urlWiki
            else :
                return None
            return nom, urlPicture
        except :
            return None


# Take my Celebrity's search and return a dico with all of his information.
def createUnderDico(Recherche):
    underDico = {}
    image = ScrappingPicture(Recherche)
    if image != None :
        tabAnswer = GeneratorName(3)
        tabAnswer.append(image[0])
        underDico["GoodAnswer"] = image[0]
        underDico["Picture"] = image[1]
        underDico["AllAnswer"] = tabAnswer
        return underDico 
    else :
        return None 


# Take famous celebrity's list and retrun a tab with his names.
def GenerateStarToFind():
        url = "https://www.forbes.fr/classements/top-100-celebrites-mieux-payees/"
        requete = requests.get(url)
        page = requete.content
        soup = BeautifulSoup(page, "html.parser" )
        names = soup.find("table", class_="table table-responsive").find_all("tr")
        i = 0
        contentTest =[]
        while i < len(names):
            content = names[i].find_all("td")[1].p.text
            contentTest.append(content)
            i+=1
        contentTest.pop(0)
        return contentTest

# Take dico with all of Celebrity's informations and return a dico with all of dico for quiz.
def dicoToFileJson(tabRecherche, numberQuestion):
    random.shuffle(tabRecherche)
    quizData = {}
    i = 0
    m = 0
    while len(quizData) < numberQuestion:
        element = createUnderDico(tabRecherche[i])
        if element != None :
            quizData["Question-" + str(m)] = element
            m+=1
        i+=1
    
    return quizData



app = Flask(__name__, static_folder="../build", static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/dataQuiz")
def dataQuiz():
    quiz = dicoToFileJson(GenerateStarToFind(), 5)
    print(quiz)
    return {"dataQuiz": quiz}
    
if __name__ == "__main__":
    app.run(debug=True)