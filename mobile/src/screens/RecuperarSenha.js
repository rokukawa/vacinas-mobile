import React, { useState } from 'react';
import {Text} from 'react-native';

// recuperação de senha firebase
import { auth } from '../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth'; 

// interno
import InputTextField from '../components/InputTextField';
import PressButton from '../components/PressButton';
import Container from '../components/Container';


const RecuperarSenha = () => {
    const [email, setEmail] = useState('')
    const onChangeEmail = (email) => {
        setEmail(email)
    }  

    const [message, setMessage] = useState('')

    const persist = () => {
        sendPasswordResetEmail(auth, email)
            .then((success) => {
                setMessage("Recuperação de senha com sucesso: " + JSON.stringify(success))
            })
            .catch((error) => {
                setMessage("Não foi possível recuperar senha com sucesso: " + JSON.stringify(error))
            })
    }

    return (
        <Container>
            <Text style={{color:'red'}}>{message}</Text>
            <InputTextField nameField='E-mail' onChangeValor={onChangeEmail} />
            <PressButton buttonName={'Recuperar senha'} buttonColor={'#3F92C5'} funct={persist}/>
        </Container>
    )
}

export default RecuperarSenha;