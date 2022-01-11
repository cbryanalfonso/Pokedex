import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Pokemones from "./Pokemones";
function Pokedex({navigation}) {
    const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [Pokemoness, setPokemoness] = useState('')

    const renderItem = ({ item }) => (
        <Pokemones navigation={navigation} item={item} />
      );

    useEffect(() => {
        fetch(URL)
            .then((value) => value.json())
            .then((value) => {
                setPokemoness(value);
                console.log(value.results);
            });
    }, [URL]);
    return (

        <View style={{ backgroundColor: '#ecf0f1', flex: 1, }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={[styles.headers, { alignItems: 'flex-start' }]}>
                        <Icon
                            name="keyboard-backspace"
                            type="material-community"
                            color="gray"
                            size={30}
                            onPress={() => console.log("Nuevos")}
                        />
                    </View>
                    <View style={[styles.headers, { alignItems: 'flex-end' }]}>
                        <Icon
                            name="menu"
                            type="material-community"
                            color="gray"
                            size={30}
                            onPress={() => console.log("Menu")}
                        />
                    </View>

                </View>
                <View style={{ marginVertical: 10, flex: 0.1, marginHorizontal: 5,
                    justifyContent: "center",

                }}>
                    <Text style={styles.titulo}>Pokedex</Text>

                </View>
                <View style={{  borderRadius: 20, flex: 0.76, margin: 5 }}>
                    <FlatList
                        data={Pokemoness.results}
                        numColumns={2}
                        renderItem={renderItem}
                        keyExtractor={(Pokemon) => Pokemon.name}
                    />
                </View>
                <View style={[styles.subContainer,{flex: 0.08}]}>
                <View style={[styles.headers, { alignItems: 'flex-start' }]}>
                        <Icon
                            name="menu-left"
                            type="material-community"
                            color="gray"
                            size={35}
                            onPress={() => console.log("Nuevos")}
                        />
                    </View>
                    <View style={[styles.headers, { alignItems: 'flex-end' }]}>
                        <Icon
                            name="menu-right"
                            type="material-community"
                            color="gray"
                            size={35}
                            onPress={() => console.log("Menu")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Pokedex;

const styles = StyleSheet.create({
    headers: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    container: {
        backgroundColor: 'white',
        borderColor: '#ecf0f1',
        borderRadius: 30,
        margin: 1,
        flex: 0.99999,
    },
    subContainer: {
        flex: 0.1,
        borderRadius: 30,
        margin: 5,
        flexDirection: 'row',
    },
    titulo: {
        color: 'gray',
        fontSize: 29,
        marginHorizontal: 30,
        fontWeight: 'bold'
    },

})

/*
 <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />

*/