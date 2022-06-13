import styled from "styled-components"

export default function Header(props){
    return (
        <HeaderContent>
            <ul>
                <li><a href="./Home"><h3>SD</h3></a></li>
                <li><a href="./Home">Accueil</a></li>
                <li><a href="./Projets">Projets</a></li>
                <li><a href="./AproposDeMoi">A propos de moi</a></li>
            </ul>
            <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="mailto:samuel.dorismond@yahoo.com">Contactez-moi</a></li>
            </ul>
        </HeaderContent>
    )
}

const HeaderContent = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100px;
    color: white;
    z-index: 10;
    /* background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px); */

    & > *{
        display: flex;
        justify-content: space-between;
        align-items: center;

        * {
            margin: 20px;
        }
    }
`