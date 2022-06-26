import styled from "styled-components"

export default function Footer(props){
    return (
        <Container>
            <h3>Site Web développé par Samuel Dorismond</h3>
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

    h3{
        text-align: center;
        color: aliceblue;
    }
`