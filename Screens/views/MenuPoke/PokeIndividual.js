import React, { useEffect, useState } from "react";
import { Image, ProgressBarAndroidComponent, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { backgroundColorNewFormat, coloresFigma } from "../../assets/Colors";
import TextUI from "../../components/Texto/TextUI";

export default function PokeIndividual({ route, navigation }) {
    const { item } = route.params;
    const [colorP, setColorP] = useState('')
    const [imagePokemon, setImagePokemon] = useState(item.sprites.front_default)
    useEffect(() => {
        console.log("Son los datos del pokemon individual ->", item.sprites.front_default);
        setColorP(item.types[0].type.name)
        setImagePokemon(item.sprites.front_default)
    }, [])
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={backgroundColorNewFormat[colorP]}
            />
            <SafeAreaView style={[styles.container, { backgroundColor: backgroundColorNewFormat[colorP] }]}>
                <View style={styles.header}>
                    <Icon type="material-community" name="close" size={40} color={'black'} />
                </View>
                <View style={styles.bodyTop}>
                    <TextUI style={'titleBold'} txt={item.name} addStyle={{ color: coloresFigma['white'] }} />
                    <Image source={{ uri: imagePokemon}} resizeMode='contain' style={{ width: widthPercentageToDP(100) }} />

                </View>


            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        alignItems: 'flex-start',
        padding: widthPercentageToDP(2)
    },
    bodyTop: {
        flex: 0.3,
        alignItems: "center",
    }
})