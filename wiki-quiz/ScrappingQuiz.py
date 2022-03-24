import requests
from bs4 import BeautifulSoup

def wikiScrapping(recherche):
    url = "https://fr.wikipedia.org/wiki/" + recherche.replace(" ", "_")
    requete = requests.get(url)
    page = requete.content
    soup = BeautifulSoup(page, "html.parser" )

    page = soup.find("div", class_="mw-parser-output")
    children = page.extract()
    children = children.find_all("p", class_="")[0:10]

    children =  str(children)

    fichier = open("Data/definition.html", "w")
    fichier.write(children)
    fichier.close()


recherche = "Emmanuel Macron"
wikiScrapping(recherche)
