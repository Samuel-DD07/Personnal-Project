import { Link } from "react-router-dom"
import styled from "styled-components"
import open from '../Assets/menu.svg'
import close from '../Assets/close.svg'
import iconGithub from '../Assets/Github-icons.png'
import iconLinkedIn from '../Assets/LinkedIn-icons.png'

export default function Header(props){

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

    window.addEventListener("scroll", function(){
        let scroll = window.scrollY
        let header = this.document.querySelector("header")

        if (scroll > 10) {
            header.style.backgroundColor = "#0E0E0E"
        } else{
            header.style.background= "none"
        }
    })

    window.addEventListener('resize', function(){
        let nav = document.querySelector("nav")
        console.log(this.innerWidth);
        if (this.innerWidth > 1200) {
            nav.style.display = 'flex'
        } else{
            nav.style.display = 'none'
        }

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
                <h3 className="logo">Dorismond</h3>
            </Link>
            <nav>
                <Link to='/Apropos'>
                    A propos
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

    *{
        animation: animation1 1s ease-in-out;
    }

    @media (max-width: 1000px) {
        img{
            width: 10%;
        }

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
            background-color: rgba(15, 15, 15, 0.5);
            backdrop-filter: blur(15px);
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
    }

    & > *{

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

    @media (max-width: 1000px){
        height: 150px;

            .menu{
                margin-top: -5px;
                display: block;
                width: 15vw;
            }

            a{
                img{
                    width: 50px;
                }
            }
        }
`