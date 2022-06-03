export default function Button(props){

    function supprAlert(event){
        event.target.parentNode.remove()
    }

    const titre = document.createElement('h3')
    titre.className = 'alert'
    const buttonExit = document.createElement('button')
    buttonExit.textContent = 'Quitter'
    buttonExit.onclick = (event) => supprAlert(event)
    const test = document.querySelector('body')

    const { ifTransfert } = props

    function alertTransfert(){
        if (ifTransfert) {
            titre.textContent = 'Echange effectué.'
            titre.appendChild(buttonExit)
            test.appendChild(titre)
        } else {
            titre.textContent = 'Echange impossible.'
            titre.appendChild(buttonExit)
            test.appendChild(titre)
        }
    }

    return(
        <button onClick={alertTransfert}>Faire l'échange.</button>
    )
}