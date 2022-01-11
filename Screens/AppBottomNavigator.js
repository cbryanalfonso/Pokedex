import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Informacion from "./Informacion";
import Pokedex from "./Pokedex/Pokedex";

const Tab = createBottomTabNavigator();

function AppBottomNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Informacion" component={Informacion} options={{headerTitle: "Pokedex", headerShown: false}}/>
            <Tab.Screen name="Pokedex" component={Pokedex} options={{ headerTitle: "Información", headerShown: false }}/>
        </Tab.Navigator>
    );
}

export default AppBottomNavigator;