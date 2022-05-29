export default function MontantToDollars(props){

    let { MontantCrypto, PriceCrypto, PercentValue, checkAmount, sumCrypto } = props

    if(PriceCrypto) {
        PriceCrypto = parseFloat(PriceCrypto.replace('$', ''))
    }


    if (checkAmount){
        return (
            (MontantCrypto || PriceCrypto) ?
            <div className="Montant">{`Montant total : $${MontantCrypto * PriceCrypto}`}</div>
            :
            <div className="Montant">Montant total :</div>
        )
    } else {
        return (
            (PercentValue || sumCrypto) ?
            <div className="Montant">{`Montant total : $${PercentValue * sumCrypto / 100}`}</div>
            :
            <div className="Montant">Montant total :</div>
        )
    }
}