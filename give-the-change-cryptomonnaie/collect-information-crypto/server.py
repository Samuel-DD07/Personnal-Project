from moduleSearchCrypto import *
from flask import Flask

app = Flask(__name__)

@app.route("/dataCrypto")
def dataCrypto():
    data = dicoNameAndPriceCrypto(searchNameCrypto())
    print(data)
    return {"dataCrypto": data}

if __name__ == "__main__":
    app.run(debug=True)