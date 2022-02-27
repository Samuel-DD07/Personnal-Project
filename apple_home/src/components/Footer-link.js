import FooterLinkData from "../data/Footer-link-data";
import FooterCredits from "./Footer-Credits";

function FooterLink(){
    const ListFooterLinkData = FooterLinkData.map((Element) =>
        <ul className={"grid-" + FooterLinkData.indexOf(Element)} key={Element.titre.toString()}>
            <h5>{Element.titre}</h5>

            {Object.entries(Element.link).map(([key, value]) =>
                <li key={key.toString()}><a className="a" href={value}>{key}</a></li>
            )}
        </ul>
    )

    return (
        <div className="Footer">
            <div className="content">
                {ListFooterLinkData}  
            </div>
            <FooterCredits />
        </div>
    )
}

export default FooterLink