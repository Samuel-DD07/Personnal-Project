import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header(props){
    return (
        <Container>
            <Link to="/">
                DORISMOND
            </Link>
            <Containt>
                <Link to="/Apropos">
                    A propos
                </Link>
                <Link to="/Projets">
                    Projets
                </Link>
                <Link to="/Contact">
                    Contact
                </Link>
            </Containt>
        </Container>
    )
}

const Container = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    z-index: 2;
    color: aliceblue;
    background-color: #0E0E0E;
`

const Containt = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    & > *{
        margin-left: 80px;
    }
`