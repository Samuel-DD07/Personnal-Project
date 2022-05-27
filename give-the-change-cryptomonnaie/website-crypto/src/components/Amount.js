export default function Amount(props){

    const { SetAmountValue } = props

    function changeInput(e){
        SetAmountValue(e.target.value)
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