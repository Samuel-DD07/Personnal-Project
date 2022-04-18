const AjouteElement = (props) =>{
    let { setNumber, numberStart } = props
    const onButtonCLick = () => {
        numberStart += 1
        setNumber(numberStart)
        console.log(numberStart)
    }

    return (
        <button className="ajoute" onClick={onButtonCLick}>+</button>
    );
}

export default AjouteElement
