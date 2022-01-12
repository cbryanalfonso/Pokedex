import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { backgroundColors } from '../assets/Colors';
import Tag from '../Pokedex/Components/Tag';


function PokemonIndividual({ route, navigation }) {
    //console.log(JSON.stringify(pokemon));
    const { pokemon } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColors[pokemon.types[0].type.name], }}>
            <StatusBar
                backgroundColor= {backgroundColors[pokemon.types[0].type.name]}
                barStyle='dark-content'
            />
            <View style={{ flex: 1,  margin: 5, flexDirection: 'row', }}>
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
                        onPress={() => console.log("Menu")}
                    />
                </View>
            </View>
            <View style={{ flex: 1.2,  margin: 5, paddingLeft: 30, justifyContent: 'center' }}>
                <Text  style={{ fontWeight: 'bold', fontSize: 35 }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            </View>
            <View style={{ flex: 1.2,  margin: 5, paddingLeft: 30, }}>
           <Tag type={pokemon.types[0].type.name}/>
            </View>
            <View style={{ flex: 4,  margin: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 300, height: 300, marginTop: -20}}
                    source={{ uri: pokemon.sprites.front_default }} />
            </View>
            <View style={{ flex: 8, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>


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