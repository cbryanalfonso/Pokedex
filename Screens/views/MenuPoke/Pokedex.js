import React, { useEffect, useState } from "react";
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../../components/header/Header";
import InputSearch from "../../components/Inputs/InputSearch";
import TextUI from "../../components/Texto/TextUI";
import ModalMenu from "../Modal/ModalMenu";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Pokemones from "../../components/cards/Pokemones";
import Error from "../../components/NoInternet/Error";
import PokemonSearch from "../../Pokedex/Components/PokemonSearch";
import Button from "../../components/Botones/Button";

export default function Pokedex({ navigation }) {
    const [pokeData, setPokeData] = useState([]);
    const [noInternet, setNoInternet] = useState(false);
    const [txtSearch, setTxtSearch] = useState('');
    const [pokeDataSearch, setPokeDataSearch] = useState([]);
    const [showFlatlist, setShowFlatlist] = useState(true);
    const url = 'https://pokeapi.co/api/v2/pokemon'
    useEffect(() => {
        fetch(url)
            .then((value) => {
                console.log(value.status);
                if (value.status != "200") {
                    setNoInternet(true);
                    console.log('No hay internet...');
                } else {
                    //setNoInternet(false)
                    console.log("Si hay internet");
                    return value.json();
                }
            })
            .then((value) => {
                //console.log(value.results);
                setPokeData(value.results)
                setShowFlatlist(true);
            })
    }, [])

    const searchBusqueda = (text) => {
        console.log(`${url}/${text}`);
        fetch(`${url}/${text}`)
            .then((value) => {
                console.log(value.status);
                if (value.status != "200") {
                    //setNoInternet(true);
                    // console.log('No hay internet...');
                } else {
                    //setNoInternet(false)
                    console.log("Si hay internet");
                    setShowFlatlist(false)
                    return value.json();
                }
            })
            .then((value) => {
                setShowFlatlist(false)
                //console.log("Si entra dentro de los value -> ", value);
                setPokeDataSearch([value])

            })
    }

    const handleOnChange = text => {
        if (text === '') {
            setPokeData([]);
            console.log('No hay nada que pueda funcionar.');
            setShowFlatlist(true)
        } else {
            searchBusqueda(text.toLowerCase())
            console.log('Estamos dentro');
        }
        //setTxtSearch(text)
    }
    const handleOnChangetxt = text => {
        setTxtSearch(text)
    }

    function nosePoke() {
        return pokeDataSearch.map(function (news, i) {
            return (
                <View key={i}>
                    <Text>ds</Text>

                </View>
            )
        })
    }

    const renderItem = ({ item }) => (
        <Pokemones navigation={navigation} item={item} />
    )
    return (
        <>
            {noInternet ? <Error navigation={navigation} /> : (
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.container}>
                        <Header pokeNavigate={()=>{navigation.navigate('Home')}} pokeLegendarios={()=>{navigation.navigate('Home')}} nameAux={' Home '}/>
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
                                <InputSearch
                                    placeholder={"Search a pokemon"}
                                    value={txtSearch}
                                    onChangeText={handleOnChangetxt}
                                />

                                {/*  <TextInput
                                    placeholder="Search a pokemon"
                                    value={txtSearch}
                                    onChangeText={(text) =>setTxtSearch(text)}
                                /> */}
                            </View>
                            <Button
                                style={'botonInicio'}
                                txt='Search'
                                addStyle={{ width: '20%' }}
                                onPress={() => { handleOnChange(txtSearch) }}
                            />
                        </View>
                        <View style={{ height: hp(65), paddingHorizontal: wp(5) }}>
                            {showFlatlist ? (
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
                                            //{
                                            // nosePoke()
                                            // }
                                            />)
                                    }
                                />
                            ) : (
                                <>
                                    <FlatList
                                        data={pokeDataSearch}
                                        keyExtractor={item => item.id}
                                        renderItem={
                                            ({ item, index }) => (
                                                <PokemonSearch
                                                    item={item}
                                                    navigation={navigation}
                                                //select={item.select}
                                                //onPress={() => this.changeSelect(index, item.select)}
                                                //{
                                                // nosePoke()
                                                // }
                                                />)
                                        }
                                    />
                                </>
                            )}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            )}
        </>
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
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: 'row'
    },
    btnSearch: {
        backgroundColor: '#F2F2F2',
        height: wp(11),
        width: wp(60),
        borderRadius: 50,
        alignSelf: 'center',
    },
})