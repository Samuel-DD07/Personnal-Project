import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Projets(props){
    const { data } = props

    document.title = "Samuel Dorismond - Projets"

    return (
        <div>
            <Container>
            <div>
                <h1>Mes Projets</h1>
                <br/>
                <h3>Vous trouverez ici tous mes projets que j'ai effectué seul ou durant mon B.U.T informatique.</h3>
            </div>
                {data.map((e, i) =>
                    <div key={i}>
                        <Block>
                            <Link to={e.Link}>
                                <div>
                                    <img src={e.Logo} alt="Logo" />
                                    <h1>{e.Titre}</h1>
                                    <h3>{e.Description}</h3>
                                    <ul>
                                        {e.Langages.map((n, x) =>
                                            <li key={x}>{n}</li>
                                        )}
                                    </ul>
                                </div>
                                <img src={e.Background} alt="background"/>
                            </Link>
                        </Block>
                        <h1 className="Annee">{e.année}</h1>
                    </div>
                )}
            </Container>
        </div>
    )
}

const Container = styled.section`
    position: relative;
    display: grid;
    grid-gap: 100px;
    gap: 100px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    & > *{
        animation: transition1 2s ease-in-out;

        &:nth-child(2n+1){
            animation: transition1 1s ease-in-out;
        }
    }
`

const Block = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 90%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: white;
        width: 100%;
        height: 100%;
        padding: 5%;

        & > *{
            margin: 2% 0 2% 3%;
        }

        img{
            position: relative;
            width: 30%;
            height: auto;
            z-index: 2;
        }
    }

    .Annee{
        position: relative;
        margin-top: 10%;
    }

    ul{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        *{
            margin-right: 20px;
        }
    }

    img{
        position: absolute;
        top: 0;
        display: block;
        object-fit: cover;
        inset: 0px;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 1;
    }

    @keyframes transition1 {
        0%{
            transform: translatey(200px);
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    }
`