import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const OutputProximasVacinas = ({ item }) => {
    return (
        <View style={styles.formaulario}>
            <Text style={styleEspecific}> { item['vacina'] } </Text>
            <Text style={styles.text}> { item['proximaData'] } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    formaulario: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
        alignItems: 'center'
    },
    text: {
        height: 30,
        fontSize: 14,
        paddingHorizontal: 10,
        textAlignVertical: 'center'
    }
});

const styleEspecific = StyleSheet.compose(
    styles.text,
    {color: '#3F92C5', fontSize: 26}
  );

export default OutputProximasVacinas;

