import MyCryptoBefore from "./MyCryptoBefore";

export default function MyCryptoAfter(props){

    const { ListCrypto } = props

    const data = ListCrypto

    return (
        <MyCryptoBefore ListCrypto={data} number={5}/>
    )
}