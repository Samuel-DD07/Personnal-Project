import { useEffect } from "react"

export default function MontantToDollars(props){

    let { MontantCrypto, PriceCrypto, PercentValue, CheckAmount, AllMontantCrypto, SetAllMontantCrypto, indice, sumAllCrypto } = props

    if(PriceCrypto) {
        PriceCrypto = PriceCrypto.replace('$', '').replace(',','')
    }

    useEffect(() =>{
        if(!!MontantCrypto){
            AllMontantCrypto[indice] = MontantCrypto * PriceCrypto;
            SetAllMontantCrypto(AllMontantCrypto)
        }
    })

    if (!CheckAmount){
        return (
            (PercentValue || PriceCrypto) ?
            <div className="Montant">{`Montant total : $${PercentValue * sumAllCrypto / 100}`}</div>
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