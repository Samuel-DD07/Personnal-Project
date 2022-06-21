import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(props) {
    return (
        <Container>
            <Link to="/">
                <h3>DORISMOND</h3>
            </Link>
            <Containt>
                <Link to="/">
                    <p>A propos</p>
                </Link>
                <Link to="/">
                    <p>Projets</p>
                </Link>
                <Link to="/">
                    <p>Contact</p>
                </Link>
            </Containt>
        </Container>

    )
}

const Container = styled.header`
    position: sticky;
    top: 0;
    padding: 3vw 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    *{  
        animation: scaling 1s ease;
        transition: 1s all;
    }

    @keyframes scaling {
        from{
            transform: scale(0);
        }
        to{
            transform: scale(1);
        }
    }
`

const Containt = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *{
        margin-left: 70px;
    }
`