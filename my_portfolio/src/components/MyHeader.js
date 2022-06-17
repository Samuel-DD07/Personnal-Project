import { useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import open from '../Assets/menu.svg'
import close from '../Assets/close.svg'

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
            }
            else{
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
                    LinkedIn
                </Link>
                <Link to='/GitHub'>
                    GitHub
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
            padding-top: 10%;
            background-color: rgb(7, 8, 14);
            z-index: 1;
        }

        .menu{
            z-index: 2;
        }

        .logo{
            position: relative;
            z-index: 2;
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