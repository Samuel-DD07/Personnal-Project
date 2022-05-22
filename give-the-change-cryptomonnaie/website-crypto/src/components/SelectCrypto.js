export default function SelectCrypto(props){

    const {dicoCrypto, setCryptoSelected} = props

    const CryptoSelected = (event) => {
        setCryptoSelected(event.target.value)
    }

    return(
        <select name="Crypto" id="Selection-Crytpo" onChange={(event) => CryptoSelected(event)}>
            {Object.keys(dicoCrypto).map((element, i) =>
                <option value={element} key={i}>{element}</option>
            )}
        </select>
    )
}