import MyCryptoBefore from './components/MyCryptoBefore';
import MyCryptoAfter from './components/MyCryptoAfter';
import Button from './Button';
import { useState } from 'react';

export default function MyCrypto(props){

    const { data } = props
    const [ MyMontant, SetMyMontant ] = useState(0)

    return (
        <div>
            <div className='BeforeCrypto'>
                <h1>Votre cryptomonnaie :</h1>
                <MyCryptoBefore 
                    ListCrypto={data} 
                    number={2} 
                    checkAmount={true}
                    MyMontant={MyMontant}
                    SetMyMontant={MyMontant => SetMyMontant(MyMontant)}
                />
            </div>

            <div className='AfterCrypto'>
                <h1>Votre monnaie :</h1>
                <MyCryptoAfter 
                    ListCrypto={data} 
                    number={2}
                    checkAmount={false}
                    MyMontantTotal={MyMontant}
                />
            </div>

            <Button />
        </div>
    )
}