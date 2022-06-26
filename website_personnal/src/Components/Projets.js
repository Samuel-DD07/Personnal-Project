import styled from "styled-components"

export default function Projets(props){

    const { listOfProjets } = props
    const tabColor = ["#0000FF", "#B0C4DE", "skyblue"]

    window.addEventListener('scroll', function(){
        document.querySelectorAll('.block').forEach((e, i) =>{
            if (e.getBoundingClientRect().top <= 300 && e.getBoundingClientRect().top >= -200) {
                e.style.backgroundColor = tabColor[i]
                e.style.width = 100 + "vw"
                e.style.height = 100 + "vh"
                e.querySelector('div').style.display = "flex"
            }

            else{
                e.style.background = "none"
                e.style.width = 50 + "vw"
                e.style.height = 50 + "vh"
                e.querySelector('div').style.display = "none"
            } 
        })
    })

    return (
        <Container>
            <h1 className="titre-2">Mes Projets</h1>
            {listOfProjets.map((e, i) =>
                    <Containt className="block" key={i} onClick={() => window.location = e.Link_Projet}>
                    <h3>{e.Nom_Du_Projet}</h3>
                    <div>
                        <h3>Année : {e.Année}</h3>
                        <h3>Description : <br /><p>{e.Description}</p></h3>
                        <ul>
                            {e.Langage_Use.map((m, a) =>
                                <li key={a}>{m}</li>
                            )}
                        </ul>
                    </div>
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
    margin-top: 0px;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background-color: #191919;
    color: aliceblue;

    .titre-2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    *{
        mix-blend-mode: difference;
    }
`

const Containt = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    height: 50vh;
    cursor: pointer;
    transition: all 1s ease;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            width: 100vw;

            & > *{
                width: 100%;
            }

            h1, h3, p, li{
                text-align: center;
            }

            p{
                font-size: 4vw;
            }
        }
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 400px;

        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;

            & > *{
                margin-right: 20px;
            }
        }

        & > *{
            margin: 20px 0px;
        }
    }
`