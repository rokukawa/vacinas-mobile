import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const InputCheckBox = (props) => {
    const [selectedOption, setSelectedOption] = useState('')

    const onChangeRadioButton = (valor) => {
        setSelectedOption(valor)
        props.onChangeValor(valor)
    }
    
    return (
        <View style={styles.formulario}>
          <Text style={styles.text}>{props.nameCheck}</Text>
          <View style={styles.container}>
            {props.optionCheck.map((dose) => (
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOption === dose.label ? styles.selectedRadioButton : null,
                ]}
                onPress={() => onChangeRadioButton(dose.label)}
                key={dose.label}
              >
                <Text style={styles.text}>{selectedOption === dose.label ? '◉' : '◯'}</Text>
                <Text style={styles.radioButtonText}>{dose.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    formulario: {
        flexDirection: 'row'
    },
    text: {
        width: '30%',
        paddingHorizontal: 10,
        textAlignVertical: 'center',
        color: '#fff'
    },
    container: {
        width: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    radioButton: {
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    radioButtonText: {
        color: '#fff'
    },
});

export default InputCheckBox;