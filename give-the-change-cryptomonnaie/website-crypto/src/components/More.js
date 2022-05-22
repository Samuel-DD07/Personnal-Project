export default function More(props){

    const { setNewContent } = props

    function ajoute(event){
        // console.log(event.target.parentNode.children[0])
        setNewContent(event.target.parentNode)
    }

    return (
        <div onClick={(event) => ajoute(event)}>+</div>
    )
}