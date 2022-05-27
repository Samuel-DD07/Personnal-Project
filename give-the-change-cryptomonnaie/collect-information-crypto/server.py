from moduleSearchCrypto import *
from flask import Flask

app = Flask(__name__)

@app.route("/dataCrypto")
def dataCrypto():
    try :
        data = dicoNameAndPriceCrypto(searchNameCrypto())
        return {"dataCrypto": data}
    except :
        return {"dataCrypto": {'Bitcoin': '$28,842.06', 'Ethereum': '$1,768.52', 'Tether': '$0.9989', 'USD Coin': '$1.00', 'BNB': '$302.03', 'XRP': '$0.3886', 'Binance USD': '$1.00', 'Cardano': '$0.4622', 'Solana': '$42.17', 'Dogecoin': '$0.08345'}}

if __name__ == "__main__":
    app.run(debug=True)