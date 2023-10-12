import React, { useState } from 'react';
import { Text } from 'react-native';

// persistencia firebase
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

// interno
import InputTextField from '../components/InputTextField';
import InputCheckBox from '../components/InputCheckBox';
import InputDate from '../components/InputDate';
import InputImage from '../components/InputImage';
import PressButton from '../components/PressButton';
import Container from '../components/Container';


const MinhasVacinas = (props) => {
    optionCheck = [
        { label: '1º dose' },
        { label: '2º dose' },
        { label: '3º dose' },
        { label: 'Dose única' },
    ]

    const [data, setData] = useState()
    const onChangeData = (data) => {
        setData(data)
    }    
    const [vacina, setVacina] = useState('')
    const onChangeVacina = (vacina) => {
        setVacina(vacina)
    }    
    const [dose, setDose] = useState('')
    const onChangeDose = (dose) => {
        setDose(dose)
    }
    const [proximaData, setProximaData] = useState()
    const onChangeProximaData = (proximaData) => {
        setProximaData(proximaData)
    }   

    const [message, setMessage] = useState('')

    const conta = props.route.params.conta
    
    const persist = () => {
        const colecao = collection(db, 'vacinas') 

        dado = {
            id: conta.id_usuario,
            data: data,
            vacina: vacina,
            dose: dose,
            proximaData: proximaData
        }

        if (data && vacina && dose && proximaData){
            addDoc(colecao, dado)
                .then(() => {
                    setMessage("Cadastro da vacina com sucesso.")
                    props.navigation.push('DrawerNavigation', { conta })
                })
                .catch(() => {
                    setMessage("Não foi possível cadastrar vacina com sucesso.")
                })
        } else {
            setMessage("Não pode haver vacina sem os campos data vacina e dose.")
        }
    }

    return (
        <Container>
            <InputDate dateName='Data da vacinação' onChangeValor={onChangeData}/>

            <InputTextField nameField='Vacina' onChangeValor={onChangeVacina} />

            <InputCheckBox optionCheck={optionCheck} nameCheck='Dose' onChangeValor={onChangeDose}/>

            <InputImage imageName='Comprovante'/>

            <InputDate dateName='Próxima vacinação' onChangeValor={onChangeProximaData}/>

            <Text style={{color:'red'}}>{message}</Text>

            <PressButton buttonName={'CADASTRAR'} buttonColor={'#3F92C5'} funct={persist}/>
        </Container>
    )
}

export default MinhasVacinas;