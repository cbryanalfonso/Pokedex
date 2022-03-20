import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function TipoPokemon({ item, navigation }){
    useEffect(()=>{
        console.log('Estamos dentros...',item);
    },[])
    return(
        <View style={styles.container}>
            <Text style={styles.txtColor}>Fire</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        paddingHorizontal: widthPercentageToDP(4),
        backgroundColor: 'red',
        margin: 10,
        paddingVertical: widthPercentageToDP(1.5)
    },
    txtColor:{
        color: 'black',
        fontWeight: "bold",
        fontSize: 12
    }
})