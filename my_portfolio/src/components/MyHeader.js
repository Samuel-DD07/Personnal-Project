import styled from "styled-components"

export default function MyHeader(props){

    return (
        <Containt>
            <a href="./"><h1>Logo</h1></a>
            <nav>
                <a href="./AproposDeMoi">A propos de moi</a>
                <a href="./Projets">Projets</a>
                <a href="./Contact">Contact</a>
            </nav>

            <div>
                <a href="./">LinkedIn</a>
                <a href="./">GitHub</a>
            </div>
        </Containt>
    )
}

const Containt = styled.header`
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    top: 0;
    width: 100vw;
    height: 100px;
    padding: 50px;
    /* backdrop-filter: blur(20px);
    background-color: rgba(24, 26, 43, 0.75); */

    & > *{
        animation: animation1 1s ease-in-out;
        
        &:nth-child(2n){
            animation: animation1 2s ease-in-out;
        }

        &:nth-child(3n){
            animation: animation1 3s ease-in-out;
        }

        *{
            margin-left: 50px;
        }
    }

    a{
        color: white;

        &:hover{
            text-decoration: underline;
        }
    }

    @keyframes animation1{
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }

    }
`