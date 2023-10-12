import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import DrawerNavigation from '../components/DrawerNavigation';
import CriarConta from './CriarConta';
import RecuperarSenha from './RecuperarSenha';
import NovaVacina from './NovaVacina';
import EditarVacina from './EditarVacina';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}} >
                <Stack.Screen name='Login' component={Login}/>
                
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />

                <Stack.Screen options={{ 
                    headerShown:true,
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerTintColor: '#fff'
                }} name='Nova Conta' component={CriarConta} />

                <Stack.Screen options={{ 
                    headerShown:true,
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerTintColor: '#fff'
                }} name='Recuperar Senha' component={RecuperarSenha} />

                <Stack.Screen options={{ 
                    headerShown:true,
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerTintColor: '#fff'
                }} name='Nova Vacina' component={NovaVacina} />

                <Stack.Screen options={{ 
                    headerShown:true,
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerTintColor: '#fff'
                }} name='Editar Vacina' component={EditarVacina} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;