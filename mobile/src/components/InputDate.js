import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputDate = (props) => {
    const [showPicker, setShowPicker] = useState(false)
    const [field, setField] = useState('')

    const handleDateChange = (event, date) => {
        setShowPicker(false)
        if (date) {
            const formattedDate = date.toLocaleDateString()
            setField(formattedDate)
            props.onChangeValor(formattedDate)
        }
    };

    return (
        <View style={styles.formaulario}>  
            <Text style={styles.text} > { props.dateName } </Text>
            <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}> 
                <Text style={styles.inputdata}>{props.default || field}</Text>
            </TouchableOpacity>
            {
                showPicker && (
                    <DateTimePicker 
                      value={new Date()} 
                      mode="date" 
                      onChange={handleDateChange}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
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
      backgroundColor: 'white'
    },
    inputdata: {
      color: '#3F92C5'
    },
    date: {
      width: '60%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10
    },
    text: {
      width: '30%',
      paddingHorizontal: 10,
      textAlignVertical: 'center',
      color: '#fff'
    },
    date: {
        width: '60%'
    },
    button: {
      marginTop: 100,
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 100
    },
    checkbox: {
      width: '15%',
      height: 40,
    }
});

export default InputDate;