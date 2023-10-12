import React, { useState } from 'react';
import {Text} from 'react-native';

// autenticação do firebase
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

// interno
import Container from '../components/Container';
import InputTextField from '../components/InputTextField';
import InputCheckBox from '../components/InputCheckBox';
import InputDate from '../components/InputDate';
import PressButton from '../components/PressButton';


const CriarConta = (props) => {
    optionCheck = [
        { label: 'Masculino' },
        { label: 'Feminino' }
    ]
    
    const [nome, setNome] = useState('')
    const onChangeNome = (nome) => {
        setNome(nome)
    }    
    const [email, setEmail] = useState('')
    const onChangeEmail = (email) => {
        setEmail(email)
    }    
    const [senha1, setSenha1] = useState('')
    const onChangeSenha1 = (senha1) => {
        setSenha1(senha1)
    }    
    const [senha2, setSenha2] = useState('')
    const onChangeSenha2 = (senha2) => {
        setSenha2(senha2)
    }    
    const [data, setData] = useState('')
    const onChangeData = (data) => {
        setData(data)
    }
    const [sexo, setSexo] = useState('')
    const onChangeSexo = (sexo) => {
        setSexo(sexo)
    }

    const [message, setMessage] = useState('')
    
    const persist = () => {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (nome.length != 0 || email.length != 0 || senha1.length != 0 || senha2.length != 0) {
            if (regex.test(email)){
                if(senha1 == senha2){
                    createUserWithEmailAndPassword(auth, email, senha1)
                        .then((success) => {
                            setMessage("Criação de conta com sucesso.")
                            
                            const colecao = collection(db, 'usuarios')
                            dado = {
                                id_usuario: success.user.uid,
                                nome: nome,
                                data: data,
                                sexo: sexo,
                                email: email,
                                senha: senha1
                            }
                            addDoc(colecao, dado)
                            props.navigation.push('Login')
                        })
                        .catch((error) => {
                            setMessage("Não foi possível criar conta com sucesso.")
                            console.log(JSON.stringify(error))
                        })
                }else{
                    setMessage('Senhas não confere!')
                }
            } else {
                setMessage('Email formato inválido!')
            }
        } else {
            setMessage('Campos não podem ser vazios!')
        }
    }
    
    return (
        <Container>
            <InputTextField nameField='Nome completo' onChangeValor={onChangeNome} />

            <InputCheckBox optionCheck={optionCheck} nameCheck='Sexo' onChangeValor={onChangeSexo}/>

            <InputDate dateName='Data de nascimento' onChangeValor={onChangeData}/>

            <InputTextField nameField='E-mail' onChangeValor={onChangeEmail}/>

            <InputTextField nameField='Senha' password={true} onChangeValor={onChangeSenha1}/>

            <InputTextField nameField='Repetir senha' password={true} onChangeValor={onChangeSenha2} />

            <Text style={{color:'red'}}>{message}</Text>

            <PressButton buttonName={'CADASTRAR'} buttonColor={'#3F92C5'} funct={persist}/>
        </Container>
    )
}

export default CriarConta;