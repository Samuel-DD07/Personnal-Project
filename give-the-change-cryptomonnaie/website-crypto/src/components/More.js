export default function More(props){

    const { setNewContent, number, i, trueFalse } = props

    function ajouter(){
        if (number < i){
            setNewContent(number+1)
            console.log(i, number);
        }
    }

    return (
        trueFalse ?
        ""
        :
        <button onClick={() => ajouter()}>+</button>
    )
}