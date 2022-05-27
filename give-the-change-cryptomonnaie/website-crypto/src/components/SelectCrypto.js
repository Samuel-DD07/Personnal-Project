export default function SelectCrypto(props){

    const {dicoCrypto, setCryptoSelected, indice, element} = props

    const CryptoSelected = (event) => {
        element[indice] = event.target.value
        setCryptoSelected(element)
    }

    return(
        <select name="Crypto" id="Selection-Crytpo" className="SelectCrypto" onChange={(event) => CryptoSelected(event)}>
            {Object.keys(dicoCrypto).map((element, i) =>
                <option value={element} key={i}>{element}</option>
            )}
        </select>
    )
}