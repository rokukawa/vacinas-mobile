import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.drawer}>
            <View style={styles.container}>
                <View>
                    <View style={styles.informacao}>
                        <Text style={styles.titulo}>Olá {props.initialParams.conta.nome}</Text>
                        <Text style={styles.subtitulo}/>
                    </View>
                    <DrawerItemList {...props}/>
                    <DrawerItem label='Sair' onPress={() => { props.navigation.push('Login') }}/>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },  
    drawer: {
        backgroundColor: '#ADD4D0',

    },  
    titulo: {
        fontSize: 36,
        margin: 20,
        width: 200,
        color: 'royalblue'
    }, 
    informacao: {
        marginBottom: 20
    },
    subtitulo: {
        borderBottomWidth: 2,
        borderBottomColor: 'royalblue'
    }
})

export default CustomDrawer;
