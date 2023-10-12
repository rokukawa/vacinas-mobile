import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// persistencia firebase
import { onSnapshot, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase/config';

// interno
import OutputProximasVacinas from '../components/OutputProximaVacina';
import PressButton from '../components/PressButton';
import Container from '../components/Container';


const ProximasVacinas = (props) => {
    const [dados, setDados] = useState([])

    const conta = props.route.params.conta

    useEffect(() => {
        const q = query(collection(db, 'vacinas'), where("id", "==", conta.id_usuario))
        
        const dado = []
        onSnapshot(q, (snapshot) => {
            snapshot.forEach((doc) => {
                const data = new Date()
                var partesData = doc.data().proximaData.split("/"); 
                var dataDesconvertida = new Date(partesData[2], partesData[0] - 1, partesData[1]);
                
                if (dataDesconvertida > data){
                    dado.push({
                        id: doc.id,
                        vacina: doc.data().vacina,
                        dose: doc.data().dose,
                        data: doc.data().data,
                        proximaData: doc.data().proximaData,
                    })
                }
            })
            setDados(dado)
        })
    }, [])

    return (
        <Container>
            <FlatList style={ {width: '90%'} } data={dados} renderItem={OutputProximasVacinas} keyExtractor={item => item.id}/>
            <PressButton funct={() => {props.navigation.push('Nova Vacina', {conta})}} buttonName={'Nova Vacina'} buttonColor={'#37BD6D'}/>
        </Container>
    )

}

export default ProximasVacinas;