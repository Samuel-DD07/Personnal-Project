export default function MontantToDollars(props){

    let { MontantCrypto, PriceCrypto } = props

    if(PriceCrypto) {
        PriceCrypto = parseFloat(PriceCrypto.replace('$', ''))
    }

    return (
        (MontantCrypto || PriceCrypto) ?
        <div className="Montant">{`Montant total : $${MontantCrypto * PriceCrypto}`}</div>
        :
        <div className="Montant">Montant total :</div>
    )
}