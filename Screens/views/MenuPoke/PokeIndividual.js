import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function PokeIndividual({route, navigation}){
    const { item } = route.params;
    useEffect(()=>{
        console.log("Son los datos del pokemon individual ->",item);
    },[])
    return(
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'yellow'
    }
})