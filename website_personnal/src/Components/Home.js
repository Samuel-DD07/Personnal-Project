import styled from "styled-components"
import Projets from "./Projets"
import Apropos from "./Apropos"
import Contact from "./Contact";

export default function Home(props){

    const { listOfProjets } = props

    var randomColor = require('randomcolor');

    window.addEventListener('scroll', function(){
        const titre = this.document.querySelector('.titre')
        if (!!titre) {
            titre.style.transform = `translateY(${this.scrollY}px)`
            titre.children[0].style.transform = `translateX(${this.scrollY/2}px)`
            titre.children[1].style.transform = `translateX(${-(this.scrollY/2)}px)`

            
            if (this.scrollY < 0) {
                titre.children[0].style.color = randomColor({luminosity: 'light'})
                titre.children[1].style.color = randomColor({luminosity: 'light'})
                titre.children[0].style.borderColor = randomColor({luminosity: 'light'})
                titre.children[1].style.borderColor = randomColor({luminosity: 'light'})
            } else{
                titre.children[0].style.color = `aliceblue`
                titre.children[1].style.color = `aliceblue`
                titre.children[0].style.borderColor = `aliceblue`
                titre.children[1].style.borderColor = `aliceblue`
            }   
        }
    })

    return (
        <div>
            <Container>
                <Containt className="titre">
                    <h1>Samuel Dorismond</h1>
                    <h1>Etudiant / Développeur Web</h1>
                </Containt>
            </Container>

            <Apropos />
            <Projets listOfProjets={listOfProjets} />
            <Contact />
        </div>
    )
}

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    color: aliceblue;
`

const Containt = styled.div`
    position: relative;
    width: 100%;
    animation: zoom 1s ease-in-out;

    h1{
        border: 0.5vh solid aliceblue;
        text-align: right;
        margin-top: 50px;
        transition: all 0.5s cubic-bezier(0,1.09,1,1);
        
        &:nth-child(odd){
            padding-right: 2vw;
        }

        &:nth-child(even){
            text-align: left;
            padding-left: 2vw;
        }
    }

    @keyframes zoom {
        0%{
            opacity: 0;
            transform: scale(4);
        }
        50%{
            opacity: 0;
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }
`