import requests
from bs4 import BeautifulSoup

recherche = "Bitcoin"
url = "https://coinmarketcap.com/currencies/" + recherche.lower()
page = requests.get(url).content
soup = BeautifulSoup(page, "html.parser")
price = soup.find("div", class_="priceValue").span.text
print(price)

