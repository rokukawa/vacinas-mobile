import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';


const InputImage = ({ imageName }) => {
    const [image, setImage] = useState(null);    
    const handleImagePicker = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    return (
        <View style={styles.formaulario}>
            <Text style={styles.text}> {imageName} </Text>
            <TouchableOpacity style={styles.input} onPress={handleImagePicker}>
                {image ? (
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                ) : (
                <Text style={styles.textimage}> Selecionar imagem </Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formaulario: {
        flexDirection: 'row'
    },
    text: {
      width: '30%',
      paddingHorizontal: 10,
      textAlignVertical: 'center',
      color: 'white'
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
    textimage: {
        color: '#3F92C5'
    }
});

export default InputImage;