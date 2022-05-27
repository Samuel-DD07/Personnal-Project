export default function Percent(props){
    
    function changeInput(e){
        console.log("Pourcentage :", e.target.value);
    }

    return(
        <input 
            type="text" 
            placeholder="25%" 
            onChange={e => changeInput(e)}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
        />
    )
}