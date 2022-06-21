import { Link } from "react-router-dom"
import styled from "styled-components"
import iconGithub from '../Assets/Github-icons.png'
import iconLinkedIn from '../Assets/LinkedIn-icons.png'
import iconMail from '../Assets/mail-icons.png'

export default function Contact(props){

    document.title = "Samuel Dorismond - Contact"

    return (
        <Content>
            <Link to="/">
                <img src={iconMail} alt="Mail"/>
            </Link>
            <Link to='/LinkedIn'>
                <img src={iconLinkedIn} alt="linkedIn"/>
            </Link>
            <Link to='/GitHub'>
                <img src={iconGithub} alt="github"/>
            </Link>
        </Content>
    )
}

const Content = styled.section`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: calc(100vh - 100px);
    padding: 0 20vw;

    & > *{
        color: white;
        position: relative;
        margin: 50px;
        animation: animation1 1s ease;

        img{
            filter: invert(100%);
            width: 60px;
            margin: 0;
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