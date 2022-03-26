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
        try :
            urlWiki = soup.find("a", class_="image").img["src"]
            urlPicture = "https:" + urlWiki
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

# Take dico with all of Celebrity's informations and return a dico with all of dico for quiz.
def dicoToFileJson(tabRecherche, nameFile):
    quizData = {}
    urlFile = "wiki-quiz/src/datas/" + nameFile + ".js"
    fichier = open(urlFile, "w")
    i = 0
    while i < len(tabRecherche):
        element = createUnderDico(tabRecherche[i])
        if element != None :
            quizData["Question-" + str(i)] = element
        i+=1
    ContentFile = "const quizData = " + json.dumps(quizData, indent = 4) + "\n" + "export default quizData"
    fichier.write(ContentFile)
    fichier.close()

# Take the 100 famous celebrity's list and retrun a tab with his names.
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

    
dicoToFileJson(GenerateStarToFind(), "ElementOfTheQuiz")