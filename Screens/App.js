import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Informacion from './Informacion';
import AppBottomNavigator from './AppBottomNavigator';
import { StatusBar } from 'react-native';
import PokemonIndividual from './Pokemon/PokemonIndividual';
import Home from './views/Home/Home';
import Pokedex from './views/MenuPoke/Pokedex';
import PokeIndividual from './views/MenuPoke/PokeIndividual';
import Error from './components/NoInternet/Error';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor='#F5DB13'
                barStyle='dark-content'
            />
            <Stack.Navigator initialRouteName="AppBottomNavigator">
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Pokedex' component={Pokedex} options={{headerShown: false}} />
                <Stack.Screen name='PokeIndividual' component={PokeIndividual} options={{headerShown: false}}/>
                <Stack.Screen name='ErrorScreen' component={Error} options={{headerShown: false}} />
               
                {/* <Stack.Screen name="AppBottomNavigator" component={AppBottomNavigator}
                    options={{ title: 'Interfaz Principal', headerShown: false }}
                />
                <Stack.Screen name="PokemonIndividual" component={PokemonIndividual}
                     options={{headerShown: false }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;