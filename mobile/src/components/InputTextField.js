import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';


const InputTextField = ( props ) => {
    const [field, setField] = useState('')

    const onChangeText = (valor) => {
        setField(valor)
        props.onChangeValor(valor)
    }

    return (
        <View style={styles.formaulario}>
            <Text style={styles.text}> { props.nameField } </Text>
            <TextInput 
                style={styles.input} 
                value={field || props.default} 
                onChangeText={onChangeText}
                secureTextEntry={props.password} 
                placeholder={props.placeField}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formaulario: {
        flexDirection: 'row'
    },
    input: {
      width: '60%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      color: '#3F92C5'
    },
    text: {
      width: '30%',
      paddingHorizontal: 10,
      textAlignVertical: 'center',
      color: '#fff'
    }
});

export default InputTextField;

