const Home = (props) =>{
    const { name, accroche, link } = props
    return (
        <div>
            <h1>{name}</h1>
            <h3>{accroche}</h3>
            <p>
                Vous pouvez me suivre sur :
                {Object.entries(link).map(([key, value]) =>
                <a key={key.toString()} href={`${value}`}>{`${key}`}</a>
            )}
            </p>
        </div>
    )
}

export default Home