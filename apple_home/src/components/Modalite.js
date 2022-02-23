import modaliteData from "../data/Modalite-data"

function Modalite(){
    const ListModaliteData = modaliteData.map((Element) =>
        <p key={Element.text.toString()}>
            <span>{Element.text + " "}</span>
            {Element.link ? <a href={Element.link.href} className="a">{Element.link.name}</a>: null}
            {Element.plus ? <span>{" " + Element.plus}</span> : null}
        </p>
    )
    return (
        <div className="modalite">
            <div className="content">{ListModaliteData}</div>
        </div>
    )
}

export default Modalite