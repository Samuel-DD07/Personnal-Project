import styled from "styled-components"
import SelectCrypto from "./SelectCrypto"
import Amount from "./Amount"
import Price from "./Price"
import Percent from "./Percent"
import More from "./More"
import Less from "./Less"
import MontantToDollars from "./MontantToDollars"
import MontantTotal from "./MontantTotal"
import { useEffect, useState } from "react"

export default function MyCryptoBefore(props){

    const { ListCrypto, number, checkAmount, MyMontant, SetMyMontant, MyMontantTotal } = props
    const [CryptoSelected, setCryptoSelected] = useState({0: "BNB"})
    const [NewContent, setNewContent] = useState(1)
    const [AmountValue, SetAmountValue] = useState({0: 0})
    const [PercentValue, SetPercentValue] = useState({0: 0})
    const [AllMontantCrypto, SetAllMontantCrypto] = useState({0: 0})
    const sumCryptoDollars = Object.values(AllMontantCrypto).reduce((a, b) => a + b)
    const sumPercentDollars = Object.values(PercentValue).reduce((a, b) => parseInt(a) + parseInt(b))
    const tab = []

    for (let i = 0; i < NewContent && i < number ; i++) {
        tab.push(NewContent)
    }

    useEffect(() =>{
        if (MyMontant !== undefined) {
            SetMyMontant(sumCryptoDollars)
        }
    },[SetMyMontant, MyMontant])

    useEffect(() =>{
        if (sumPercentDollars > 0 && sumPercentDollars == 100) {
            console.log('Echange possible');
        } else {
            console.log('Echange impossible');
        }
    },[sumPercentDollars])

    return (
        <div className="BlockContent">
            {
                tab.map((e, i) =>
                <Block key={i}>
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
                            AllMontantCrypto={AllMontantCrypto}
                            SetAllMontantCrypto={AllMontantCrypto => SetAllMontantCrypto(AllMontantCrypto)}
                            sumAllCrypto={MyMontantTotal}
                            indice={i}
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
            }
            { checkAmount ?
                <div>
                    <h3>Montant Total de votre cryptomonnaie :</h3>
                    <MontantTotal value={sumCryptoDollars}/> 
                </div>
                :
                ''
            }
        </div>
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