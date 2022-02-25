import FooterCreditsData from "../data/Footer-Credits-data"

function FooterCredits(){
    return(
        <div className="Credits">
            <div>
                <p>Vous pouvez aussi faire vos achats <a href="" className="a">dans un Apple Store</a> ou <a href="" className="a">Chez un renvendeur</a>. Ou appeler le 0800 046 046.</p>
                <hr/>

                <div className="Copyright">
                    <p>Copyright © 2022 Apple Inc. Tous droits réservés.</p>
                    <p>France</p>
                </div>

                <div className="Links">
                    {Object.entries(FooterCreditsData).map(([key, value]) =>
                         <a href={value} className="a">{key}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FooterCredits