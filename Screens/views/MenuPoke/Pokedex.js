import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../../components/header/Header";
import InputSearch from "../../components/Inputs/InputSearch";
import TextUI from "../../components/Texto/TextUI";
import ModalMenu from "../Modal/ModalMenu";

export default function Pokedex({ navigation }) {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.title}>
                <TextUI style={'titleNormal'} txt={'800 '} addStyle={styles.txtStyle} />
                <TextUI style={'titleBold'} txt={'Pokemons'} addStyle={styles.txtStyle} />
                <TextUI style={'titleNormal'} txt={' for you'} addStyle={styles.txtStyle} />
            </View>
            <View style={[styles.title, { paddingTop: 0, }]}>
                <TextUI style={'titleNormal'} txt={'to choose your favorite'} addStyle={styles.txtStyle} />
            </View>
            <View style={styles.filtros}>
                <View style={styles.btnSearch}>
                    <InputSearch placeholder={"Search a pokemon"}  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.08,
        elevation: 10,
        backgroundColor: '#F5DB13',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 30/// AGREGAR REACT NATIVE RESPONSIVE ...
    },
    title: {
        flex: 0.04,
        backgroundColor: 'red',
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: "center",
        paddingTop: 20,
    },
    txtStyle: {
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: 3,
    },
    filtros: {
        flex: 0.15,
        backgroundColor: 'yellow',
        justifyContent: "center",
        alignItems: "center"
    },
    btnSearch: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
       // height: widthPercentageToDP(10),
       // width: widthPercentageToDP(80),
        borderRadius: 50,
        alignSelf: 'center',
    },
})