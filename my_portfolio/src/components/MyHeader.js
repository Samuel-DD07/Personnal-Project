import { useEffect } from "react"
import styled from "styled-components"

export default function MyHeader(props){


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
            let menu = this.document.querySelector('.menu')
            let menuOpen = true

            if (this.innerWidth < 1200) {
                menu.style.display = "block"
            }

            else{
                menu.style.display = "none"
            }
        })
    })

    return (
        <Containt>
            <a href="./"><h1>Logo</h1></a>
            <nav>
                <a href="./AproposDeMoi">A propos de moi</a>
                <a href="./Projets">Projets</a>
                <a href="./Contact">Contact</a>
            </nav>

            <div>
                <a href="./">LinkedIn</a>
                <a href="./">GitHub</a>
            </div>

            <div className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/></svg>
            </div>
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

    .menu{
        -webkit-filter: invert(100%);
        filter: invert(100%);
        display: none;
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
            text-decoration: underline;
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