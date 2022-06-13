import styled from "styled-components"

export default function Home(props){

    const { data } = props

    return (
        <div>
            <Section>
                <div className="text-content">
                    <h3>{data.type + " " + data.annee}</h3>
                    <h1>{data.titreProjets}</h1>
                    <p>{data.presentation}</p>
                    <ul>
                        {data.language.map((e, i) =>
                            <li key={i}>
                                <p>{e}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <img className="background" src={data.background} alt="background"/>
            </Section>
        </div>
    )
}

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
    width: 100vw;
    height: 100vh;
    color: white;
    overflow: hidden;

    &:first-child{
        justify-content: flex-start;
        background: linear-gradient(transparent, #0E0E0E 95%);
    }

    .background{
        position: absolute;
        top: 0px;
        inset: 0px;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .text-content{
        letter-spacing: 3px;
        color: white;
        margin-left: 20px;
        width: 70vw;

        & > *{
            margin: 30px;
        }

        ul{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & > *{
                margin-right: 20px;
            }
        }
    }
`

