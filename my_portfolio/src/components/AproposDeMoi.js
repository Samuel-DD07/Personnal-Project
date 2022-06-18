import styled from "styled-components"
import Projets from "./Projets"

export default function AproposDeMoi(props){

    const { data } = props

    document.title = "Samuel Dorismond - A propos de moi"

    return (
        <div>
            <Content>
                <h1>A propos de moi</h1>
                <Description>
                    <img src={require('../Assets/test.png')} alt="perso" />
                    <div>
                        <h3>Qui suis-je ?</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Description>
            </Content>  
            <Content>
                <h1>Mes Expériences</h1>
                <Description>
                <div className="block">
                    <h3>2021 - En cours</h3>
                    <h1>B.U.T informatique</h1>
                    <h3>À l'université Sorbonne Paris Nord</h3>
                </div>
                <div className="block">
                    <h3>2018 - 2021</h3>
                    <h1>BAC Général</h1>
                    <h3>Au Lycée Andre Boulloche</h3>
                </div>
                </Description>
            </Content>  
            <Content>
                <h1>Mes Compétences</h1>
                <Description>
                    <ul>
                        <li>
                            <h3>HTML</h3>
                        </li>
                        <li>
                            <h3>CSS</h3>
                        </li>
                        <li>
                            <h3>JS</h3>
                        </li>
                        <li>
                            <h3>PYTHON</h3>
                        </li>
                        <li>
                            <h3>REACT JS</h3>
                        </li>                        
                    </ul>
                </Description>
            </Content>  
            <Projets data={data}/>
        </div>
    )
}

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
    width: 100vw;
    height: 100%;
`

const Description = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 90%;
    padding: 5%;
    height: 100%;

    h1{
        font-size: 3em;
    }

    *{
        animation: animation1 1s ease;
    }

    @media (max-width: 1200px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        div{
            text-align: center;
            width: 100%;
        }
    }

    img{
        width: auto;
        height: 600px;
        opacity: 0.75;
        z-index: -1;
    }

    div{
        margin: 20px;
        width: 60%;
    }

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        *{
            margin: 20px;
        }
    }

    .block{
        width: 45%;
        text-align: center;

        @media (max-width: 1200px){
            border: 1px solid red;
            width: 100%;
        }
    }

    @keyframes animation1{
        0%{
            opacity: 0;
            transform: translateY(100px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
`