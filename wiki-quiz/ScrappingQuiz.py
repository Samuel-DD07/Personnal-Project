import requests
from bs4 import BeautifulSoup
import json
import urllib.request

def ScrappingPicture(nom):
    url = "https://fr.wikipedia.org/wiki/" + nom.replace(" ", "_")
    requete = requests.get(url)
    page = requete.content
    soup = BeautifulSoup(page, "html.parser" )

    urlWiki = soup.find("a", class_="image").img["src"]
    urlPicture = "https:" + urlWiki
    return nom, urlPicture


def ScrappingPictureToJSON(TabRecheche):
    dico_search = {}
    i = 0
    while i < len(TabRecheche):
        image = ScrappingPicture(TabRecheche[i])
        dico_search[image[0]] = image[1]
        i+=1
    return dico_search


def dicoToFileJson(dico):
    fichier = open("Data/picture.json", "w")
    dico = json.dumps(dico, indent = 4)
    fichier.write(dico)
    fichier.close()

recherche = [
    "Emmanuel Macron", 
    "Emma Watson", 
    "Samuel L. Jackson", 
    "Cristiano Ronaldo", 
    "Justin Bieber", 
    "Ariana Grande",
    "Selena Gomez"]

dicoToFileJson(ScrappingPictureToJSON(recherche))

