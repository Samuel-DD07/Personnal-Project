import requests
from bs4 import BeautifulSoup
import json
import names

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
        urlWiki = soup.find("a", class_="image").img["src"]
        urlPicture = "https:" + urlWiki
        return nom, urlPicture


def createUnderDico(Recherche):
    underDico = {}
    image = ScrappingPicture(Recherche)
    underDico["Guess"] = image[0]
    underDico["Picture"] = image[1]
    underDico["OtherGuess"] = GeneratorName(3)
    return underDico

def dicoToFileJson(tabRecherche, nameFile):
    quizData = {}
    urlFile = "Data/" + nameFile + ".js"
    fichier = open(urlFile, "w")

    i = 0
    while i < len(tabRecherche):
        quizData["Question-" + str(i)] = createUnderDico(recherche[i])
        i+=1
    dicoQuiz = json.dumps(quizData, indent = 4)
    ContentFile = "const quizData = " + dicoQuiz
    fichier.write(ContentFile)
    fichier.close()

recherche = [
    "Emmanuel Macron", 
    "Emma Watson", 
    "Samuel L. Jackson", 
    "Cristiano Ronaldo", 
    "Justin Bieber", 
    "Ariana Grande",
    "Selena Gomez"]
    
dicoToFileJson(recherche, "picture")