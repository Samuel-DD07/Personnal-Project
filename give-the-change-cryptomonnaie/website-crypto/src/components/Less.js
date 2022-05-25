export default function Less(props){

    const { setNewContent, number } = props

    function supprimer(){
        if (number-1 > 0){
            setNewContent(number-1)
        }
    }

    return (
        <button onClick={() => supprimer()}>-</button>
    )
}