import IphoneStartData from "../data/IphoneStart-data"

function IphoneStart(){
    const ListElementIphone = IphoneStartData.map((Element) =>

        <a href={Element.Link1.href}>
            <div style={{backgroundImage: `url(${Element.src})`}} className={Element.class} key={Element.accroche.toString()}>
            
            <div className="content">
                <h1>{Element.nameProduit}</h1>
                <h3>{Element.accroche}</h3>
                <div>
                    <a className="a" href={Element.Link1.href}>{Element.Link1.name}</a>
                    <a className="a" href={Element.Link2.href}>{Element.Link2.name}</a>
                </div>
            </div>

        </div>
        
        </a>
    )
    return(
        <div className="Iphone-Start">{ListElementIphone}</div>
    )
}

export default IphoneStart