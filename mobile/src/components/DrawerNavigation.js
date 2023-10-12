import { createDrawerNavigator} from "@react-navigation/drawer";

import CustomDrawer from './CustomDrawer';
import Home from '../screens/Home';
import ProximasVacinas from '../screens/ProximasVacinas';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {    
    conta = props.route.params.conta
    return(
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawer {...props} initialParams={{ conta }}/>} 
            screenOptions={{headerStyle: {backgroundColor: '#C1E7E3'}, headerTintColor: 'white'}}
        >
            <Drawer.Screen name='Minhas Vacinas' component={Home} initialParams={{ conta }}/> 
            <Drawer.Screen name='Proximas vacinas' component={ProximasVacinas} initialParams={{ conta }}/> 
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
