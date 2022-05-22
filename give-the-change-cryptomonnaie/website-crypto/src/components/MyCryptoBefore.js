import styled from "styled-components"
import SelectCrypto from "./SelectCrypto"
import Amount from "./Amount"
import Price from "./Price"
import Percent from "./Percent"
import More from "./More"
import { useState } from "react"

export default function MyCryptoBefore(props){

    const { ListCrypto } = props
    const [CryptoSelected, setCryptoSelected] = useState('')
    const [NewContent, setNewContent] = useState('')
    return (
        <Block>
          <Content>
              <Price cryptoPrice={ListCrypto[CryptoSelected]}/>
              <SelectCrypto dicoCrypto={ListCrypto} setCryptoSelected={CryptoSelected => setCryptoSelected(CryptoSelected)}/>
              <Amount />
              <Percent />
          </Content>
          <More setNewContent={NewContent => setNewContent(NewContent)}/>
          {/* <Less /> */}
        </Block>
    )
}

const Block = styled.div`
`

const Content = styled.div`
`