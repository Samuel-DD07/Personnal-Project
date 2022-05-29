export default function More(props){

    const { setNewContent, number, i, trueFalse } = props

    function ajouter(){
        if (number < i){
            setNewContent(number+1)
        }
    }

    return (
        trueFalse ?
        ""
        :
        <button onClick={() => ajouter()}>+</button>
    )
}