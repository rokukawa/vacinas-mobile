import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PressButton = ( props ) => {
    const styles = StyleSheet.create({
        button: {
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            backgroundColor: props.buttonColor
        },
        container: {
            width: '50%',
            marginBottom: 40
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ props.funct } >
                <Text style={styles.button}> { props.buttonName } </Text>
            </TouchableOpacity>
        </View>
    )

}


export default PressButton;
