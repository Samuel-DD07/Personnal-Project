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
    bottom: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: rgba(24, 26, 43, 1);
`