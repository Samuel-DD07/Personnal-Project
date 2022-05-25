import styled from "styled-components"
import SelectCrypto from "./SelectCrypto"
import Amount from "./Amount"
import Price from "./Price"
import Percent from "./Percent"
import More from "./More"
import Less from "./Less"
import { useState } from "react"

export default function MyCryptoBefore(props){

    const { ListCrypto, number } = props
    const [CryptoSelected, setCryptoSelected] = useState({0: "BNB"})
    const [NewContent, setNewContent] = useState(1)
    const tab = []

    for (let i = 0; i < NewContent && i < number ; i++) {
        tab.push(NewContent)
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
                        <Amount />
                        <Percent />
                    </Content>
                <More 
                    setNewContent={NewContent => setNewContent(NewContent)} 
                    number={NewContent}
                />
                <Less 
                    setNewContent={NewContent => setNewContent(NewContent)} 
                    number={NewContent}
                />
            </Block>
        )
    )
}

const Block = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Content = styled.div`
`