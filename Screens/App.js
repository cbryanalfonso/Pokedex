import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Informacion from './Informacion';
import Pokedex from './Pokedex/Pokedex';
import AppBottomNavigator from './AppBottomNavigator';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor='#ecf0f1'
                barStyle='dark-content'
            />
            <Stack.Navigator initialRouteName="AppBottomNavigator">
                <Stack.Screen name="AppBottomNavigator" component={AppBottomNavigator}
                    options={{ title: 'Interfaz Principal', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;