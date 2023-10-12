import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Image, FlatList } from 'react-native';

// persistencia firebase
import { onSnapshot, query, collection, where, or, and } from 'firebase/firestore';
import { db } from '../firebase/config';

// interno
import PressButton from '../components/PressButton';
import InputVacina from '../components/InputVacina';
import Container from '../components/Container';

const Home = (props) => {
    const [pesquisa, setPesquisa] = useState('')
    const [dados, setDados] = useState([])
    
    const conta = props.route.params.conta
    
    useEffect(() => {

        let q;

        if (pesquisa) {
          q = query(collection(db, 'vacinas'), and(where("vacina", "==", pesquisa), where("id", "==", conta.id_usuario)));
        } else {
          q = query(collection(db, 'vacinas'), where("id", "==", conta.id_usuario));
        }

        onSnapshot(q, (snapshot) => {
            const dado = []
            snapshot.forEach((doc) => {
                dado.push({
                    id: doc.id,
                    vacina: doc.data().vacina,
                    dose: doc.data().dose,
                    data: doc.data().data,
                    proximaData: doc.data().proximaData,
                })
            })
            setDados(dado)
        })
    }, [pesquisa])

    return (
        <Container>
            <View style={styles.subcontainer}>
                <Image source={require('../../assets/lupa.png')} style={styles.image}/>
                <TextInput 
                    placeholder="Pesquisar vacina" 
                    value={pesquisa} 
                    onChangeText={setPesquisa}
                />
            </View>

            <FlatList data={dados} renderItem={({ item }) => { return <InputVacina dado={item} funct={() => {props.navigation.push('Editar Vacina', {item, conta})}}/> }} keyExtractor={item => item.id} numColumns={2}/>
            
            <PressButton funct={() => {props.navigation.push('Nova Vacina', {conta})}} buttonName={'Nova Vacina'} buttonColor={'#37BD6D'}/>

        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 40, 
        height: 40
    },
    subcontainer: {
        width: '92%',
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: 'white'
    }
});

export default Home;