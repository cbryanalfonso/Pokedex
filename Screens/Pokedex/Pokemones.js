import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ImageStore, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { backgroundColors } from '../assets/Colors';
import Tag from './Components/Tag';



function Pokemones({ item, navigation }) {
    const [pokemonIndividual, setPokemonIndividual] = useState('');
    const [imagenPokemon, setImagenPokemon] = useState('');
    const [colorPokemon, setColorPokemon] = useState('')


    useEffect(() => {
        fetch(item.url)
            .then((value) => value.json())
            .then((value) => {
                setPokemonIndividual(value);
                setImagenPokemon(value.sprites.front_default)
                setColorPokemon(value.types[0].type.name)
            });

    }, []);
    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity
                style={[styles.Boton, { backgroundColor: backgroundColors[colorPokemon] }]}
                onPress={() => navigation.navigate('PokemonIndividual',{pokemon: pokemonIndividual})}
            //, {
            //   id_company: company.id_company,
            //   titleCompanyGOM: company.title,
            // });

            >
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                    <Tag type={colorPokemon} />
                    {/*Funcion para hacer la primera letra en mayuscula*/}
                </View>
                <View style={{ flex: 1, marginLeft: -10 }}>
                    <Image style={{ width: 100, height: 100 }}
                        source={imagenPokemon ? { uri: imagenPokemon }
                            :
                            <ActivityIndicator color="#05A8F3" size="large" />

                        } />

                </View>

            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    Boton: {
        flex: 1,
        margin: 7,
        marginLeft: 15,
        borderRadius: 20,
        flexDirection: 'row',
        height: 100
    }
})
export default Pokemones;

/*
<View style={{flex: 1, backgroundColor: 'yellow', margin:7, marginRight: 15, borderRadius: 20 }}>

            </View>
            
{ uri: 'https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg' }
*/