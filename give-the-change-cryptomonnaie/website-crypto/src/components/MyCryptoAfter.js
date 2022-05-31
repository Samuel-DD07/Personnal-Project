import MyCryptoBefore from "./MyCryptoBefore";

export default function MyCryptoAfter(props){

    const { ListCrypto, number, checkAmount, MyMontantTotal } = props

    const data = ListCrypto

    return (
        <MyCryptoBefore ListCrypto={data} number={number} checkAmount={checkAmount} MyMontantTotal={MyMontantTotal} />
    )
}