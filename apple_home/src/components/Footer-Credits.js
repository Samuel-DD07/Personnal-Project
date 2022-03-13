import FooterCreditsData from "../data/Footer-Credits-data"

function FooterCredits(){
    return(
        <div className="Credits">
            <div>
                <p>Vous pouvez aussi faire vos achats <a href="https://www.apple.com/fr/retail/" className="a">dans un Apple Store</a> ou <a href="https://locate.apple.com/fr/fr/" className="a">Chez un renvendeur</a>. Ou appeler le 0800 046 046.</p>
                <hr/>

                <div className="Copyright">
                    <p>Copyright © 2022 Apple Inc. Tous droits réservés.</p>
                    <p>France</p>
                </div>

                <div className="Links">
                    {Object.entries(FooterCreditsData).map(([key, value]) =>
                         <a key={key.toString()} href={value} className="a">{key}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FooterCredits