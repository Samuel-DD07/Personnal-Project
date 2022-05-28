export default function Amount(props){

    const { SetAmountValue, Amount, indice} = props

    function changeInput(e){
        Amount[indice] = e.target.value
        SetAmountValue(Amount)
    }

    return(
        <input 
            type="text" 
            placeholder="100" 
            className="Amount"
            onChange={e => changeInput(e)}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
        />
    )
}