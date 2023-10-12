import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ADD4D0',
      paddingTop: 20
    }
});

export default Container;