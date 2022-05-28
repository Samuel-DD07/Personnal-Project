export default function Less(props){

    const { setNewContent, number, trueFalse } = props

    function supprimer(){
        if (number-1 > 0){
            setNewContent(number-1)
        }
    }

    return (
        trueFalse ?
        <button onClick={() => supprimer()}>-</button>
        :
        ""
    )
}