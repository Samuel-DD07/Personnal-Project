import styled from "styled-components"

export default function Footer(props){
    return (
        <Container>
            <h1>Site Web développé par Samuel Dorismond</h1>
        </Container>
    )
}

const Container = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    h1{
        font-size: 3vw;
        color: aliceblue;
    }
`