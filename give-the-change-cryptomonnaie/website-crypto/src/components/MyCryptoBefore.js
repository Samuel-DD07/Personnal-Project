import styled from "styled-components"
import SelectCrypto from "./SelectCrypto"
import Amount from "./Amount"
import Price from "./Price"
import Percent from "./Percent"
import More from "./More"
import Less from "./Less"
import MontantToDollars from "./MontantToDollars"
import { useState } from "react"

export default function MyCryptoBefore(props){

    const { ListCrypto, number } = props
    const [CryptoSelected, setCryptoSelected] = useState({0: "BNB"})
    const [NewContent, setNewContent] = useState(1)
    const [AmountValue, SetAmountValue] = useState(1)
    const tab = []

    for (let i = 0; i < NewContent && i < number ; i++) {
        tab.push(NewContent)
        console.log(tab);
    }

    return (
        tab.map((e, i) =>
            <Block key={i}>

                    <Price
                        cryptoPrice={ListCrypto[CryptoSelected[i]]}
                    />

                    <Content>
                        <SelectCrypto 
                            dicoCrypto={ListCrypto} 
                            setCryptoSelected={CryptoSelected => setCryptoSelected(CryptoSelected)} 
                            indice={i} 
                            element={CryptoSelected}
                        />
                        <Amount 
                            SetAmountValue={AmountValue => SetAmountValue(AmountValue)} 
                            Amount={AmountValue}/>
                        <Percent />
                    </Content>
                    
                    <MontantToDollars 
                        MontantCrypto={AmountValue} 
                        PriceCrypto={ListCrypto[CryptoSelected[i]]}
                    />
                    <div className="PlusMoins">
                        <More 
                            setNewContent={NewContent => setNewContent(NewContent)} 
                            number={NewContent}
                        />
                        <Less 
                            setNewContent={NewContent => setNewContent(NewContent)} 
                            number={NewContent}
                        />
                    </div>
            </Block>
        )
    )
}

const Block = styled.div`
    position: relative;
    display: grid;
    margin: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 1fr);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation: animated 1s;
    transition: 1s all;
    
    @keyframes animated {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    .Price{
        background-color: #14AEEE;
        color: white;
        text-align: center;
        grid-column: 1 / 6;
    }

    .Montant{
        background-color: blue;
        color: white;
        text-align: center;
        grid-column: 1 / 6;
        grid-row: 3;
    }

    .PlusMoins{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        grid-column: 6 / 7;
        grid-row: 1 / 4;
        border: 1px solid green;
        *{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            border: 1px solid black;
        }
    }
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 6;
    grid-row: 2;

    .SelectCrypto{
        border: 1px solid black;
        width: 100%;
        height: 20px;
    }
    .Amount{
        width: 100%;
    }

    .Pourcentage{
        width: 50px;
    }
`