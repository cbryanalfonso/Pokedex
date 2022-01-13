import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { backgroundColors } from '../assets/Colors';
import AboutModal from '../Pokedex/Components/AboutModal';
import Tag from '../Pokedex/Components/Tag';


function PokemonIndividual({ route, navigation }) {
    //console.log(JSON.stringify(pokemon));
    const { pokemon } = route.params;
    const [showAbout, setShowAbout] = useState(true)
    const [species, setSpecies] = useState([])
    const [info, setInfo] = useState([])
    const [huevos, setHuevos] = useState("")

    const render = () => {
        var myloop = [];

        for (let i = 0; i < 3; i++) {
            myloop.push(
                <View key={i}>
                    <Text>{i}</Text>
                </View>
            );
        }
    }

    useEffect(() => {
        fetch(pokemon.species.url)
            .then((value) => value.json())
            .then((value) => {
                setSpecies(value)
                console.log(value.flavor_text_entries[6].flavor_text);
                setInfo(value.flavor_text_entries[6].flavor_text)
                console.log(value.egg_groups[0].name);
                setHuevos(value.egg_groups[0].name);
                //setGroups(value.egg_groups[0].name);
                //console.log(value.flavor_text_entries[6].flavor_text);
                //setInfo(species.flavor_text_entries[6].flavor_text)
            });

    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColors[pokemon.types[0].type.name], }}>
            <StatusBar
                backgroundColor={backgroundColors[pokemon.types[0].type.name]}
                barStyle='dark-content'
            />
            <View style={{ flex: 1, margin: 5, flexDirection: 'row', }}>
                <View style={[styles.headers, { alignItems: 'flex-start' }]}>
                    <Icon
                        name="keyboard-backspace"
                        type="material-community"
                        color="white"
                        size={30}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={[styles.headers, { alignItems: 'flex-end' }]}>
                    <Icon
                        name="heart-outline"
                        type="material-community"
                        color="white"
                        size={30}
                        onPress={() => console.log(huevos)}
                    />
                </View>
            </View>
            <View style={{ flex: 1.2, margin: 5, paddingLeft: 30, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 35 }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            </View>
            <View style={{ flex: 1.2, margin: 5, paddingLeft: 30, }}>
                <Tag type={pokemon.types[0].type.name} />
            </View>
            <View style={{ flex: 4, margin: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 300, height: 300, marginTop: -20 }}
                    source={{ uri: pokemon.sprites.front_default }} />
            </View>
            <View style={{ flex: 8, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <View style={{
                    flex: 1.5,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <TouchableOpacity style={{ padding: 20 }}
                        onPress={() => console.log((pokemon.abilities[0].ability.name))}
                    >
                        <Text style={styles.txtBotones}>About</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Text style={styles.txtBotones}>Base Stats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Text style={styles.txtBotones}>Evolution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Text style={styles.txtBotones}>Moves</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6.5 }}>
                    {showAbout && (
                        <View style={{ flex: 6.5 }}>
                            <ScrollView>
                                <View style={{ paddingLeft: 30, marginBottom: 10, }}>
                                    <Text style={[styles.txtAboutInformacion, { textAlign: 'justify' }]}>{info}</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: 'row', }}>
                                    <View style={{ flex: 1, paddingLeft: 30 }}>
                                        <Text style={styles.txtAbout}>Species</Text>
                                        <Text style={styles.txtAbout}>Height</Text>
                                        <Text style={styles.txtAbout}>Weight</Text>
                                        <Text style={styles.txtAbout}>Abilities</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Text style={styles.txtAboutInformacion}></Text>
                                        <Text style={styles.txtAboutInformacion}>{(pokemon.height / 3.048).toFixed(1)} in ({(pokemon.height * 10)} cm)</Text>
                                        <Text style={styles.txtAboutInformacion}>{(pokemon.weight / 4.536).toFixed(1)} lb ({(pokemon.weight / 10)} kg)</Text>
                                        <Text style={styles.txtAboutInformacion}>{pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + pokemon.abilities[0].ability.name.slice(1)}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 2.5 }}>
                                    <Text style={[styles.txtAboutInformacion, {
                                        textAlign: 'justify', paddingLeft: 30, fontSize: 23,
                                        fontWeight: 'bold',
                                    }]}>Breeding</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, paddingLeft: 30 }}>
                                            <Text style={styles.txtAbout}>Gender</Text>
                                            <Text style={styles.txtAbout}>Egg groups</Text>
                                            <Text style={styles.txtAbout}>Egg Cycle</Text>
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.txtAboutInformacion}></Text>
                                            <Text style={styles.txtAboutInformacion}>{huevos.charAt(0).toUpperCase() + huevos.slice(1)}</Text>
                                            <Text style={styles.txtAboutInformacion}>{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</Text>

                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )
                    }

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headers: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    subContainer: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    txtBotones: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    txtAbout: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 7
    },
    txtAboutInformacion: {
        color: 'black',
        fontSize: 15,
        paddingVertical: 7
    },
})

export default PokemonIndividual;


// Corazones:  heart-outline
// relleno:    cards-heart 


/*
<Image style={{ width: 500, height: 500 }}
                        source={pokemon.sprites.front_default ? { uri: pokemon.sprites.front_default }
                            :
                            <ActivityIndicator color="#05A8F3" size="large" />

                        } />
                        
            <View style={{ backgroundColor: 'green', flex: 0.8 }}>
                <View style={styles.subContainer}>
                    <View style={[styles.headers, { alignItems: 'flex-start' }]}>
                        <Icon
                            name="keyboard-backspace"
                            type="material-community"
                            color="white"
                            size={30}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <View style={[styles.headers, { alignItems: 'flex-end' }]}>
                        <Icon
                            name="menu"
                            type="material-community"
                            color="white"
                            size={30}
                            onPress={() => console.log("Menu")}
                        />
                    </View>

                </View>
                <View style={[styles.subContainer, { paddingLeft: 30, alignItems: 'center' }]}>
                    <Text>{pokemon.name}</Text>
                </View>
                <View style={[styles.subContainer, { paddingLeft: 30, alignItems: 'center' }]}>
                    <Text>Tipo</Text>
                </View>
                <View style={[{ alignItems: 'center', flex: 0.55,  }]}>
                    
                </View>
                <View style={{ backgroundColor: 'white', flex: 1.2, borderTopRightRadius: 35, borderTopLeftRadius: 35 }}>

                </View>
            </View>

*/