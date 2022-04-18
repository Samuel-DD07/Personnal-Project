import PrixCrypto from './PrixCrypto';
const ElementCrypto = (props) =>{

    const { numberElement } = props
    let i = 0
    let tabElement = []
    while (i < numberElement){
        tabElement.push(i)
        i+=1
    }


    return (
        <div>{        
            tabElement.map((element) =>
                <div key={element}>
                    <PrixCrypto/>
                    {/* <div>
                        <Montant />
                        <CryptoSelectionnee />
                    </div>
                    <Moins /> */}
                </div>
            )
        }</div>
    );
}

export default ElementCrypto
