import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Login } from '../views/login';
import { Register } from '../views/register';


const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Register" component={Register} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}