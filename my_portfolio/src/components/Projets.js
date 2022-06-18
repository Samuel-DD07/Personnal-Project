import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Projets(props){
    const { data } = props

    document.title = "Samuel Dorismond - Projets"

    return (
        <div>
            <Content>
                <h1>Mes Projets</h1>
                <br/>
                <h3>Vous trouverez ici tous mes projets que j'ai effectué.</h3>
            </Content>
            <Container>
                {data.map((e, i) =>
                    <div key={i}>
                        <Block>
                            <Link to={e.Link}>
                                <img src={e.Background} alt="background"/>
                                <div>
                                    <h3 className="Titre">{e.Titre}</h3>
                                    <h3 className="Annee">{e.année}</h3>
                                </div>
                            </Link>
                        </Block>
                    </div>
                )}
            </Container>
        </div>
    )
}

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 200px;
`

const Container = styled.section`
    position: relative;
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100%;
        

    & > *{
        margin: 50px;
        animation: transition1 1.5s ease-in-out;

        &:nth-child(2n+1){
            animation: transition1 2s ease-in-out;
        }

        &:nth-child(3n+1){
            animation: transition1 1s ease-in-out;
        }
    }
`

const Block = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    height: 200px;
    width: 350px;
    border-radius: 20px;
    transition: 1s transform;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

    
    &:hover{
        transform: scale(1.2);
        transition: 1s transform;

        @media screen {
            transform: none;
        }
    }

    @media (max-height: 1000px) {
        height: 150px;
        width: 250px;
    }

    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;

        &:hover{
            .Annee{
                display: none;
            }
        }

        &:hover{
            .Titre{
                display: flex;
            }
        }
    }

    .Titre{
        display: none;
    }

    .Annee{
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