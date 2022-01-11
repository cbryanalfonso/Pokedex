import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageStore, Text, TouchableOpacity, View } from 'react-native';



function Pokemones({ item, navigation }) {
    const [pokemonIndividual, setPokemonIndividual] = useState('');
    const [imagenPokemon, setImagenPokemon] = useState('');
    useEffect(() => {
        fetch(item.url)
            .then((value) => value.json())
            .then((value) => {
                setPokemonIndividual(value);
                //console.log(value.sprites.front_default);
                setImagenPokemon(value.sprites.front_default)
                //console.log(value.types);
            });
    }, []);
    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'blue', margin: 7, marginLeft: 15, borderRadius: 20, flexDirection: 'row', height: 100 }}>
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text> 
                {/*Funcion para hacer la primera letra en mayuscula*/}
                </View>
                <View style={{ flex: 1, marginLeft: -10 }}>
                    <Image style={{ width: 100, height: 100 }}
                        source={imagenPokemon ? { uri: imagenPokemon }
                            :
                            { uri: 'https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg' }} />

                </View>

            </TouchableOpacity>

        </View>
    );
}

export default Pokemones;

/*
<View style={{flex: 1, backgroundColor: 'yellow', margin:7, marginRight: 15, borderRadius: 20 }}>

            </View>
            

*/