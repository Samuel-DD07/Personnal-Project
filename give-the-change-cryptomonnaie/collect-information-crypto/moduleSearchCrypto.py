import requests
from bs4 import BeautifulSoup

def searchPriceCrypto(recherche):
    recherche = recherche.lower().replace(" ", "-")
    url = "https://coinmarketcap.com/currencies/" + recherche
    page = requests.get(url).content
    soup = BeautifulSoup(page, "html.parser")
    price = soup.find("div", class_="priceValue").span.text
    return price


def searchNameCrypto():
    url = "https://coinmarketcap.com/currencies/"
    page = requests.get(url).content
    soup = BeautifulSoup(page, "html.parser")
    ListCrypto = soup.find("tbody")
    ListElementCrypto = ListCrypto.findAll("p", class_="sc-1eb5slv-0 iworPT")
    i = 0
    while i < len(ListElementCrypto):
        ListElementCrypto[i] = ListElementCrypto[i].text
        i+=1
    return ListElementCrypto


def dicoNameAndPriceCrypto(ListeNameCrypto):
    dico = {}
    for i in ListeNameCrypto:
        dico[i] = searchPriceCrypto(i)
    return dico