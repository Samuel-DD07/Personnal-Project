import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Projets(props){

    return (
        <Container>
            <h1>Mes Projets :</h1>

            <ContainerImg>
                <Wrap>
                    <Link to='/'>
                        <img src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="test" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="test" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="test" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="test" />
                    </Link>
                </Wrap>
            </ContainerImg>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    text-align: center;
    color: white;

    h1{
        margin: 50px;
    }
`

const ContainerImg = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 400px;
`

const Wrap = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 30px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 2px solid white;

    img{
        display: block;
        inset: 0px;
        border-radius: 10px;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`