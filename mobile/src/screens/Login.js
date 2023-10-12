import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

// autenticação de login firebase
import { auth, db } from '../firebase/config';
import { query, collection, where, getDocs,onSnapshot } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

// interno
import InputTextField from '../components/InputTextField';
import PressButton from '../components/PressButton';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const onChangeEmail= (email) => {
        setEmail(email)
    }

    const [senha, setSenha] = useState('')
    const onChangeSenha= (senha) => {
        setSenha(senha)
    }

    const [message, setMessage] = useState('')

    const login = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((success) => {
                setMessage("Logado com sucesso.")
                const q = query(collection(db, "usuarios"), where("email", "==", email))

                onSnapshot(q, (snapshot) => {
                    snapshot.forEach((doc) => {
                        const conta = doc.data()
                        props.navigation.push('DrawerNavigation', { conta })
                    })
                })

            })
            .catch((error) => {
                setMessage("Não foi possível logar com sucesso.")
            })
    }

    return (
        <ImageBackground style={styles.backgroundimage} source={require('../../assets/vacina-background.jpeg')}> 
            <View style={styles.container}>
                <View style={styles.formaulario}>
                    <Image style={styles.image} source={require('../../assets/vacina.png')}/>
                    <Text style={styles.title}>MyHealth</Text>
                </View>

                <Text style={styles.subtitle}>Controle suas vacinas {'\n'}e fique seguro</Text>

                <View style={styles.subcontainer}>
                    <InputTextField nameField='E-mail' placeField='E-mail de usuário' onChangeValor={onChangeEmail}/>

                    <InputTextField nameField='Senha' password={true} placeField='Senha de usuário' onChangeValor={onChangeSenha}/>
                </View>

                <Text style={{color:'red'}}>{message}</Text>

                <View style={styles.button}>
                    <PressButton funct={login} buttonName={'Entrar'} buttonColor={'#37BD6D'} />
                    <PressButton funct={() => {props.navigation.push('Nova Conta')}} buttonName={'Criar minha conta'} buttonColor={'#419ED7'}/>
                    <PressButton funct={() => {props.navigation.push('Recuperar Senha')}} buttonName={'Esqueci minha senha'} buttonColor={'#B5C7D1'}/>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50
    },
    backgroundimage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"

    },
    subcontainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formaulario: {
        flexDirection: 'row'
    },
    title: {
      fontSize: 38,
      fontFamily: 'Averia Libre',
      height:100,
      color: '#419ED7'
    },
    subtitle:{
        fontSize: 22,
        textAlign: 'center',
        height: 70,
        color: '#419ED7'
    },
    button: {
      marginTop: 50,
      width: 400,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 150
    },
    image: {
        width: 50, 
        height: 50,
        tintColor: '#419ED7'
    }
});

export default Login;