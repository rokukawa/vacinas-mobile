import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const InputVacina = (props) => {
    return (
        <TouchableOpacity onPress={ props.funct } style={styles.vacina}>
            <View style={styles.square}>
                <Text style={styles.title}>{ props.dado.vacina }</Text>
                <Text style={styleEspecific}>{ props.dado.dose }</Text>
                <Text style={styles.datatitle}>{ props.dado.data }</Text>
                <Image style={styles.image} source={require('../../assets/comprovante-vacina.jpeg')}/>
                <Text style={styles.proximadata}>Próxima dose em: { props.dado.proximaData }</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    vacina: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap', 
    },
    square: {
      height: 210,
      width: 180,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ccc',
      marginHorizontal: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      marginBottom: 10
    }, 
    title: {
      textAlign: 'center',
      color: '#3F92C5',
      fontSize: 20
    },
    datatitle: {
      textAlign: 'center',
      color: '#8B8B8B',
      fontSize: 12
    },
    proximadata: {
      textAlign: 'center',
      color: '#FD7979',
      fontSize: 12
    },
    image: {
      height: 125,
      width: 130,
      padding: 5
    }
})


const styleEspecific = StyleSheet.compose(
  styles.text,
  {
    textAlign: 'center',
    backgroundColor: '#3F92C5',
    color: 'white',
    width: 100
  }
);


export default InputVacina;
