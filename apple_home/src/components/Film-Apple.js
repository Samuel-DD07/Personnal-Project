import DataFilm from "../data/Film-Apple-data";

function FilmApple(){
    const listeFilm = DataFilm.map((Element) =>
        <a href={Element.link1} key={Element.accroche.toString()}>
            <div key={Element.titre} className={Element.class} style={{backgroundImage: `url(${Element.src})`}}>

            <div className="titre">{Element.titre}</div>

            <div className="content">
                <img src={Element.logo}/>
                <span className="accroche">{Element.accroche}</span>
                <a href={Element.link2.href} className="a">{Element.link2.name}</a>
            </div>

            </div>
        </a>
    )
    return(
        <div>{listeFilm}</div>
    )
}

export default FilmApple