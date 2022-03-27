import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { coloresFigma } from "../../assets/Colors";

export default function Power(props){
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={{color: 'black', fontSize: 20}}>{props.nvl}</Text>
            </View>
            <Text  style={{color: '#9B897B', fontSize: 13}}>{props.typePower}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: coloresFigma['white'],
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: widthPercentageToDP(1),
        paddingTop: widthPercentageToDP(1)
    },
    circle:{
        height: widthPercentageToDP(12),
        width: widthPercentageToDP(12),
        //padding: 10,
        borderWidth: 3,
        borderColor: coloresFigma['dark'],
        backgroundColor: coloresFigma['white'],
        borderRadius: 50/2,
        
        margin: widthPercentageToDP(1),
        justifyContent: "center",
        alignItems: "center",
    }
})