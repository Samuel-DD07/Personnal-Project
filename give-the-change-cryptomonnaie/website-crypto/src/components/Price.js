export default function Price(props){

    const {cryptoPrice} = props

    return(
        cryptoPrice ? 
        <div className="Price">{`Prix Maintenant : ${cryptoPrice}`}</div>
        :
        <div className="Price">Prix Maintenant :</div>
    )
}