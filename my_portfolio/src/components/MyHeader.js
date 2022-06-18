import { useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import open from '../Assets/menu.svg'
import close from '../Assets/close.svg'
import iconGithub from '../Assets/Github-icons.png'
import iconLinkedIn from '../Assets/LinkedIn-icons.png'

export default function MyHeader(props){

    let menuStatus = true;
    
    function menuResponsive(event){
    let nav = document.querySelector("nav")

        if (menuStatus){
            menuStatus = false
            event.target.src = open
            nav.style.display = 'none'
        }
        else{
            menuStatus = true
            event.target.src = close
            nav.style.display = 'flex'
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", function(){
            let scroll = window.scrollY
            let header = this.document.querySelector("header")

            if (scroll > 10) {
                header.style.backgroundColor = "rgba(24, 26, 43, 1)"
            } else{
                header.style.background= "none"
            }
        })

        window.addEventListener('resize', function(){
            let nav = document.querySelector("nav")
            if (this.innerWidth > 1200) {
                nav.style.display = 'flex'
            } else{
                nav.style.display = 'none'
            }
        })

        document.querySelector("header").querySelectorAll('a').forEach(e =>{
            e.addEventListener('click', function(){
                if (window.innerWidth < 1200){
                    let nav = document.querySelector("nav")
                    nav.style.display = 'none'
                    e.parentNode.parentNode.querySelector('.menu').src = open
                }
            })
        })

    }, [])

    return (
        <Containt>
            <Link to='/'>
                <h1 className="logo">SD</h1>
            </Link>
            <nav>
                <Link to='/AproposDeMoi'>
                    A propos de moi
                </Link>
                <Link to='/Projets'>
                    Projets
                </Link>
                <Link to='/Contact'>
                    Contact
                </Link>
                <Link to='/LinkedIn'>
                    <img src={iconLinkedIn} alt="linkedIn"/>
                </Link>
                <Link to='/GitHub'>
                    <img src={iconGithub} alt="github"/>
                </Link>
            </nav>

            <img src={open} alt="menu" onClick={(event) => menuResponsive(event)} className="menu"/>
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

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 1200px) {
        nav{
            position: absolute;
            display: none;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding: 20vh 0%;
            background-color: rgb(7, 8, 14);
            z-index: 1;
            

            & > *{
                margin: auto;
            }
        }

        .menu{
            z-index: 2;
        }

        .logo{
            position: relative;
            z-index: 2;
            margin: 0;
        }
    }

    .menu{
        -webkit-filter: invert(100%);
        filter: invert(100%);
        display: none;

        @media (max-width: 1200px) {
            display: block;
        }
    }

    & > *{

        animation: animation1 1s ease-in-out;
        
        &:nth-child(2n){
            animation: animation1 2s ease-in-out;
            @media screen {
                animation: none;
            }
        }

        *{
            margin-left: 50px;
        }
    }

    a{
        color: white;

        img{
            filter: invert(100%);
            width: 30px;
            margin: 0;
        }

        &:hover{
            text-shadow: 1px 1px 10px rgba(255,255,255, 1);
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