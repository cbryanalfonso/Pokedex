import React, { useEffect, useState } from "react";
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../../components/header/Header";
import InputSearch from "../../components/Inputs/InputSearch";
import TextUI from "../../components/Texto/TextUI";
import ModalMenu from "../Modal/ModalMenu";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Pokemones from "../../components/cards/Pokemones";

export default function Pokedex({ navigation }) {
    const[pokeData, setPokeData] = useState([])
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((value)=>value.json())
        .then(value => {
            //console.log(value.results);
            setPokeData(value.results)
        })
    },[])

    const renderItem = ({ item }) => (
        <Pokemones navigation={navigation} item={item} />
    ) 
    return (
        <KeyboardAvoidingView style={styles.container}>
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
                        <InputSearch placeholder={"Search a pokemon"} />
                    </View>
                </View>
                <View style={{height: hp(65), paddingHorizontal: wp(5)}}>
                    <FlatList
                        data={pokeData}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item, index }) => (
                                <Pokemones
                                    item={item}
                                    navigation={navigation}
                                //select={item.select}
                                //onPress={() => this.changeSelect(index, item.select)}
                                />)
                        }
                    />
                </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        height: hp(6),
        //flex: 0.04,
        // backgroundColor: 'red',
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
        //flex: 0.15,
        height: hp(15),
        //backgroundColor: 'yellow',
        justifyContent: "center",
        alignItems: "center"
    },
    btnSearch: {
        backgroundColor: '#F2F2F2',
        height: wp(11),
        width: wp(80),
        borderRadius: 50,
        alignSelf: 'center',
    },
})