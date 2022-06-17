import styled from "styled-components"

export default function Footer(props){
    return (
        <Content>
            <h3>Site web developpé par Samuel Dorismond.</h3>
        </Content>
    )
}

const Content = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: rgba(24, 26, 43, 1);
`