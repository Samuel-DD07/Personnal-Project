import styled from "styled-components"
import Projets from "./Projets"

export default function Home(props){

    const data = ["Elocutio Paris Nord", "Wedding WebSite", "Give the change of the Cryptomonnaie"]

    window.addEventListener('scroll', function(){
        const titre = this.document.querySelector('.titre')
        titre.style.transform = `translateY(${-(this.scrollY/2)}px)`
        titre.children[0].style.transform = `translate(${this.scrollY/2}px)`
        titre.children[1].style.transform = `translateX(${-(this.scrollY/2)}px)`
    })

    return (
        <div>
            <Container>
                <Containt className="titre">
                    <h1>Samuel Dorismond</h1>
                    <h1>Etudiant / Développeur Web</h1>
                </Containt>
            </Container>
            <Projets listOfProjets={data}/>
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
    color: aliceblue;
`

const Containt = styled.div`
    position: relative;
    width: 100%;

    & > *{
        text-align: right;

        &:nth-child(2n){
            text-align: left;
        }
    }
`