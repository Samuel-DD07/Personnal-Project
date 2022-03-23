import requests
from bs4 import BeautifulSoup

url = "https://fr.wikipedia.org/wiki/" + "Macron"

requete = requests.get(url)
page = requete.content
soup = BeautifulSoup(page, "html.parser" )

page = soup.find("div", class_="mw-parser-output")
children = page.findChildren("p", recursive=False)

children = str(children)

fichier = open("wiki-quiz/Data/definition.html", "w")
fichier.write(children)
fichier.close()

