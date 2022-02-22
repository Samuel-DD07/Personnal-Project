import srcNav from '../data/Nav-data.js'


function Nav(){
    const ListeNav = srcNav.map((element) => 
        <span key={element.name.toString()}>
            {element.UserElement ? <img src={element.src}/> : <a href={element.link}><img src={element.src}/></a>}
        </span>
    )
    
    return (
        <div className="content-nav">
            <div className="nav">{ListeNav}</div>
        </div>
    )
}

export default Nav