import React, { useEffect } from "react";
import { View } from "react-native";

export default function PokemonSearch({item, navigation}){
    useEffect(()=>{
        //console.log(item);
        console.log('dentro brous');
    },[])
    return(
        <>
            <View style={{flex:1, backgroundColor: 'red'}}>

            </View>
        </>
    )
}