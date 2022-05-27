export default function MontantToDollars(props){

    let { MontantCrypto, PriceCrypto } = props

    if(PriceCrypto) {
        PriceCrypto = parseFloat(PriceCrypto.replace('$', ''))
    }

    return (
        <div className="Montant">{`Montant total en USD : $${MontantCrypto * PriceCrypto}`}</div>
    )
}