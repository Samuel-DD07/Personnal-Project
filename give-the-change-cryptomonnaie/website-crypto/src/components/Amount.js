export default function Amount(props){

    function changeInput(e){
        console.log("Montant :", e.target.value);
    }

    return(
        <input 
            type="text" 
            placeholder="100" 
            onChange={e => changeInput(e)}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
        />
    )
}