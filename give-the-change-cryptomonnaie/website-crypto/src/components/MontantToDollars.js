export default function MontantToDollars(props){

    let { MontantCrypto, PriceCrypto, PercentValue, CheckAmount } = props

    if(PriceCrypto) {
        PriceCrypto = PriceCrypto.replace('$', '').replace(',','')
    }

    // console.log(PriceCrypto);

    if (!CheckAmount){
        return (
            (PercentValue || PriceCrypto) ?
            <div className="Montant">{`Montant total : $${PercentValue}`}</div>
            :
            <div className="Montant">Montant total :</div>
        )

    } else {
        return (
            (MontantCrypto || PriceCrypto) ?
            <div className="Montant">{`Montant total : $${MontantCrypto * PriceCrypto}`}</div>
            :
            <div className="Montant">Montant total :</div>
        )
    }
}