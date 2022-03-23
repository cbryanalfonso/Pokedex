import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { coloresFigma } from "../../assets/Colors";
import Button from "../Botones/Button";
import TextUI from "../Texto/TextUI";

export default function Error({navigation}){
    return(
        <>
        <StatusBar
            barStyle="light-content"
            backgroundColor={coloresFigma['Danger']}
        />
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={require('../../assets/img/404.png')} resizeMode='contain' style={{width: widthPercentageToDP(100), position: "absolute"}} />
                <Image source={require('../../assets/img/teamRocket.png')} resizeMode='contain' style={{width: widthPercentageToDP(70)}} />
            </View>
            <View style={styles.subContainerMessage}>
            <TextUI style={'titleBold'} txt={'The rocket team '} addStyle={styles.txtStyle}/>
            <TextUI style={'titleBold'} txt={'The rocket team '} addStyle={{color: coloresFigma['dark']}}/>
            <Button txt={'Return'} style={'botonReturn'} onPress={()=> {navigation.navigate('Pokedex')}} addStyle={styles.btnMargin} />

            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: coloresFigma['Danger'],
    },
    subContainer:{
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: 'yellow'
    },
    subContainerMessage:{
        flex: 0.5,
        alignItems: 'center',
    },
    txtStyle:{
        color: coloresFigma['white']
    },
    btnMargin:{
        marginTop: widthPercentageToDP(10)
    }
})