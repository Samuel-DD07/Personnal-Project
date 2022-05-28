export default function Percent(props){

    const { SetPercentValue, PercentValue, indice} = props
    
    function changeInput(e){
        PercentValue[indice] = e.target.value
        SetPercentValue(PercentValue)
        if(!e.target.value.includes("%")){
            e.target.value += "%"
        };
    }

    return(
        <input 
            type="text" 
            className="Pourcentage"
            placeholder="25%" 
            onChange={e => changeInput(e)}
            onKeyDown={(event => {
                if (event.target.value.includes("%")){
                    event.target.value = event.target.value.replace("%", "")
                }
            })}
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
              }}
        />
    )
}