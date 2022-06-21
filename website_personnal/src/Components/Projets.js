import styled from "styled-components"

export default function Projets(props){

    const { listOfProjets } = props
    const tabColor = ["#0000FF", "#B0C4DE", "skyblue"]

    window.addEventListener('scroll', function(){
        const titre = this.document.querySelector('.titre')
        titre.style.transform = `translateY(${-(this.scrollY)}px)`

        document.querySelectorAll('.block').forEach((e, i) =>{
            if (e.getBoundingClientRect().top <= 250) {
                e.style.backgroundColor = tabColor[i]
            } 
            if(e.getBoundingClientRect().top <= -250){
                e.style.background = "none"
            } 
        })
    })

    return (
        <Container>
            <h1 className="titre">Mes Projets</h1>
            {listOfProjets.map((e, i) =>
                <Containt className="block" key={i}>
                    <h1>{e}</h1>
                </Containt>
            )}
        </Container>
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
    min-height: 100vh;
    max-height: 100%;
    color: aliceblue;

    .titre{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    h1{
        text-align: center;
        mix-blend-mode: difference;
    }
`

const Containt = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    transition: 0.25s background-color ease;

    h1{
        font-size: 3vw;
    }
`