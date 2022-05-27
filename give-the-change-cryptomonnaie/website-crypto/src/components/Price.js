export default function Price(props){

    const {cryptoPrice} = props

    return(
        <div className="Price">{`Prix Maintenant : ${cryptoPrice}`}</div>
    )
}