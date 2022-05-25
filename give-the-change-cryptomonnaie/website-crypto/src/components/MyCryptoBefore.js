import styled from "styled-components"
import SelectCrypto from "./SelectCrypto"
import Amount from "./Amount"
import Price from "./Price"
import Percent from "./Percent"
import More from "./More"
import Less from "./Less"
import { useState } from "react"


export default function MyCryptoBefore(props){

    const { ListCrypto } = props
    const [CryptoSelected, setCryptoSelected] = useState('')
    const [NewContent, setNewContent] = useState(1)
    const tab = []

    for (let i = 0; i < NewContent && i < 2 ; i++) {
        tab.push(NewContent)
    }

    return (
        tab.map((e, i) =>
            <Block key={i}>
                    <Price cryptoPrice={ListCrypto[CryptoSelected]}/>
                    <Content>
                        <SelectCrypto dicoCrypto={ListCrypto} setCryptoSelected={CryptoSelected => setCryptoSelected(CryptoSelected)}/>
                        <Amount />
                        <Percent />
                    </Content>
                <More setNewContent={NewContent => setNewContent(NewContent)} number={NewContent}/>
                <Less setNewContent={NewContent => setNewContent(NewContent)} number={NewContent}/>
            </Block>
        )
    )
}

const Block = styled.div`
position: relative;
display: flex;
margin: 0.5em 0 0.5em 0;
`

const Content = styled.div`
`