import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';

// persistencia firebase
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// interno
import InputTextField from '../components/InputTextField';
import InputCheckBox from '../components/InputCheckBox';
import InputDate from '../components/InputDate';
import InputImage from '../components/InputImage';
import PressButton from '../components/PressButton';
import Container from '../components/Container';
import DeleteConfirmationModal from '../components/Modal';


const MinhasVacinas = (props) => {
    optionCheck = [
        { label: '1º dose' },
        { label: '2º dose' },
        { label: '3º dose' },
        { label: 'Dose única' },
    ]

    const [modalVisible, setModalVisible] = useState(false)

    const [data, setData] = useState('')
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
    const [proximaData, setProximaData] = useState('')
    const onChangeProximaData = (proximaData) => {
        setProximaData(proximaData)
    }   

    useEffect(() => {
        setData(props.route.params.item.data)
        setVacina(props.route.params.item.vacina)
        setDose(props.route.params.item.dose)
        setProximaData(props.route.params.item.proximaData)
    }, [])

    const conta = props.route.params.conta
    const editar = () => {
        const id = props.route.params.item.id
        const refDoc = doc(db, 'vacinas', id)
        updateDoc(refDoc, {
            vacina: vacina,
            dose: dose,
            data: data,
            proximaData: proximaData
        })
        .then(() => {
            props.navigation.push('DrawerNavigation', {conta})
        })
        .catch()
    }

    const excluir = () => {
        const id = props.route.params.item.id
        const refDoc = doc(db, 'vacinas', id)
        deleteDoc(refDoc)
        setModalVisible(!modalVisible)
        props.navigation.push('DrawerNavigation', {conta})
    }
    
    return (
        <Container>
            <DeleteConfirmationModal isVisible={modalVisible} onDelete={excluir} onCancel={() => setModalVisible(!modalVisible)}/>

            <InputDate dateName='Data da vacinação' onChangeValor={onChangeData} default={data}/>

            <InputTextField nameField='Vacina' onChangeValor={onChangeVacina} default={vacina}/>

            <InputCheckBox optionCheck={optionCheck} nameCheck='Dose' onChangeValor={onChangeDose} default={dose}/>

            <InputImage imageName='Comprovante'/>

            <InputDate dateName='Próxima vacinação' onChangeValor={onChangeProximaData} default={proximaData}/>

            <PressButton funct={editar} buttonName={'Salvar alteração'} buttonColor={'#37BD6D'}/>
            <PressButton funct={() => setModalVisible(!modalVisible)} buttonName={'Excluir'} buttonColor={'#FD7979'}/>
  

        </Container>
    )
}


export default MinhasVacinas;