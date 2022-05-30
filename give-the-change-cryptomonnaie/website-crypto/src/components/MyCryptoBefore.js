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

    const { ListCrypto, number, checkAmount } = props
    const [CryptoSelected, setCryptoSelected] = useState({0: "BNB"})
    const [NewContent, setNewContent] = useState(1)
    const [AmountValue, SetAmountValue] = useState({0: 0})
    const [PercentValue, SetPercentValue] = useState({0: 0})
    const tab = []

    for (let i = 0; i < NewContent && i < number ; i++) {
        tab.push(NewContent)
    }

    return (
        tab.map((e, i) =>
            <Block key={i}>

                        {CryptoSelected[i] ?
                            console.log(ListCrypto[CryptoSelected[i]].replace('$', '') * AmountValue[i])
                            :
                            console.log('')
                        }


                    <Content>
                        <SelectCrypto 
                            dicoCrypto={ListCrypto} 
                            setCryptoSelected={CryptoSelected => setCryptoSelected(CryptoSelected)} 
                            indice={i} 
                            element={CryptoSelected}
                        />

                        { checkAmount ?
                            <Amount 
                                SetAmountValue={AmountValue => SetAmountValue(AmountValue)} 
                                Amount={AmountValue}
                                indice={i}
                            />
                            :
                            <Percent 
                                SetPercentValue={PercentValue => SetPercentValue(PercentValue)}
                                PercentValue={PercentValue}
                                indice={i}
                            />
                         }

                    </Content>
                
                    <Price
                        cryptoPrice={ListCrypto[CryptoSelected[i]]}
                    />

                    <MontantToDollars 
                        MontantCrypto={AmountValue[i]} 
                        PriceCrypto={ListCrypto[CryptoSelected[i]]}
                        PercentValue={PercentValue[i]}
                        CheckAmount={checkAmount}
                    />

                    <div className="PlusMoins">
                        <More 
                            setNewContent={NewContent => setNewContent(NewContent)} 
                            number={NewContent}
                            i = {number}
                            trueFalse={NewContent === number}
                        />
                        <Less 
                            setNewContent={NewContent => setNewContent(NewContent)} 
                            number={NewContent}
                            i = {number}
                            trueFalse={NewContent === number}
                        />
                    </div>
            </Block>
        )
    )
}

const Block = styled.div`
    position: relative;
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 1000px;
    height: 80px;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-radius: 50px;
    box-shadow: rgb(149, 108, 247) 0px 1px 4px;
    background-color: rgb(39, 38, 44);
    animation: animated 1s;
    border: 2px solid rgb(81, 75, 97);
    transition: 1s all;
    
    @keyframes animated {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .Price{
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 4px);
        background: none;
        text-align: center;
        border: 2px solid rgb(219, 87, 156);
        color: rgb(219, 87, 156);
        grid-area: 1 / 3 / 2 / 4;
        transition: 1s all;

        &:hover{
                color: white;
                background-color: rgb(219, 87, 156);
            }
    }

    .Montant{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: calc(100% - 4px);
        background: none;
        text-align: center;
        border: 2px solid rgb(149, 108, 247);
        color: rgb(149, 108, 247);
        grid-area: 1 / 4 / 2 / 5;
        transition: 1s all;
        
        &:hover{
                color: white;
                background-color: rgb(149, 108, 247);
            }
    }

    .PlusMoins{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        grid-area: 1 / 5 / 2 / 6;

        *{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            font-size: large;
            line-height: -100px;
            border-radius: 50px;
            background: none;
            color: rgb(95, 196, 206);
            border: 2px solid rgb(95, 196, 206);
            transition: 1s all;

            &:hover{
                color: white;
                background-color: rgb(95, 196, 206);
            }
        }

    }
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    grid-area: 1 / 1 / 2 / 3; 

    * {
        border: none;
        color: white;
    }

    .SelectCrypto{
        width: 100%;
        height: 100%;
        text-align: center;
        background: none;
        border-right: 3px solid rgb(81, 75, 97);
        border-radius: 50px 0 0 50px;
        appearance: none;
    }

    .Amount{
        width: 100%;
        height: calc(100% - 4px);
        background: none;
        text-align: center;
        border-right: 3px solid rgb(81, 75, 97);
    }

    .Pourcentage{
        width: 100%;
        height: calc(100% - 4px);
        background: none;
        text-align: center;
    }
`