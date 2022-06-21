import styled from "styled-components"

let x = 0;
let y = 0;

window.addEventListener('mousemove', function(e){
    const logo = document.querySelector('.logo')
    x = e.clientX / 15
    y = e.clientY / 15
    logo.style.transform = `translate(${-x}px, ${-y}px)`
})

export default function Home(props){
    return (
        <Container>
            <Logo className="logo">
                <h1>SD</h1>
                <h3>SAMUEL DORISMOND</h3>
            </Logo>
            <Containt>
                <div>
                    <h1>Etudiant / Developpeur Web</h1>
                    <h3>Samuel Dorismond</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Containt>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -8%;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background: linear-gradient(to right, rgb(34, 34, 34) 0%, rgb(34, 34, 34) 30%, rgb(24, 24, 24) 30%, rgb(24, 24, 24) 100%);
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    margin-left: 15%;

    h1{
        font-size: 20vw;
        color: aliceblue;
        color: rgba(250, 250, 250, 0.1);
        letter-spacing: -20px;
        font-family: 'Lobster', cursive;
    }

    h3{
        position: absolute;
        margin-left: 5%;
        margin-top: 1.5%;
        font-size: 3vw;
        width: 600px;
        text-align: center;
        font-weight: 700;
    }
`

const Containt = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-left: 5%;
    margin-right: 5vw;
    width: 40%;
    height: 100%;

    h1{
        font-size: 2vw;
    }

    h3{
        font-size: 1.5vw;
    }

    div {
        p{
            font-size: 1vw;
        }

        & > *{
            margin: 2vh;
        }
    }
`