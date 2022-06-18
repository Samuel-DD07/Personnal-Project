import styled from "styled-components"
import Projets from "./Projets"

export default function Home(props){

    const {data} = props

    return (
        <div>
            <Content>
                <div>
                    <h1>Samuel Dorismond</h1>
                    <br />
                    <h3>Etudiant en B.U.T informatique.</h3>
                    <h3>Développeur Web.</h3>
                </div>
                <img src={require('../Assets/test.png')} alt="perso" />
            </Content>
            <Projets data={data}/>
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
    width: 100vw;
    height: calc(100vh - 100px);
    animation: animation 2s ease;

    div{
        position: absolute;
        animation: animation 3s;

        h1{
            font-size: 5em;
        }

        h3{
            font-size: 1.5em;
        }

        @media (max-width: 1200px){
            h1{
                font-size: 3em;
            }
            h3{
                font-size: 1em;
            }
        }
    }

    img{
        width: auto;
        height: 100%;
        opacity: 0.75;
        z-index: -1;
    }

    @keyframes animation {
        0%{
            opacity: 0;
            transform: translateY(200px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }

    }
`