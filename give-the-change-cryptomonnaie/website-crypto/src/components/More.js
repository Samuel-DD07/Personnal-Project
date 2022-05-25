export default function More(props){

    const { setNewContent, number } = props

    function ajouter(){
        setNewContent(number+1)
    }

    return (
        <button onClick={() => ajouter()}>+</button>
    )
}