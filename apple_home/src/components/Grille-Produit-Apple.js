import GrilleProduitData from "../data/Grille-Produit-data"


function ProduitApple(){
    const ListProduitApple = GrilleProduitData.map((Element) =>
        <a href={Element.link1.href} key={Element.accroche.toString()}>
            <div className={Element.class} style={{backgroundImage: `url(${Element.produit})`}}>
                <div>
                    {Element.new ? <p>Nouvelle</p> : <p></p>}
                    {Element.logo ? <img src={Element.logo}/> : null}
                    {Element.name ? <h1>{Element.name}</h1> : null}
                    <h5>{Element.accroche}</h5>
                    <span>
                        <a href={Element.link1.href} className="a">{Element.link1.name}</a>
                        <a href={Element.link2.href} className="a">{Element.link2.name}</a>
                    </span>
                </div>
            </div>
        </a>
    )
    return(
        <div className="content-produit">{ListProduitApple}</div>
    )
}

export default ProduitApple