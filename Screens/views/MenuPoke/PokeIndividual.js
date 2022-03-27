import React, { useEffect, useState } from 'react';
import {
    Image,
    ProgressBarAndroidComponent,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { backgroundColorNewFormat, coloresFigma } from '../../assets/Colors';
import Power from '../../components/power/Power';
import TextUI from '../../components/Texto/TextUI';

export default function PokeIndividual({ route, navigation }) {
    const { item } = route.params;
    const [colorP, setColorP] = useState('');
    const [imagePokemon, setImagePokemon] = useState(item.sprites.front_default);
    const [abilidades, setAbilidades] = useState(item.abilities)
    const [arrayAbilidades, setArrayAbilidades] = useState([])
    let arreglosmoves = []
    const hp = item.stats[0].base_stat;
        const attack = item.stats[1].base_stat
        const deffense = item.stats[2].base_stat
        const spAttack = item.stats[3].base_stat
        const spDeffense = item.stats[4].base_stat
    useEffect(() => {
        /* console.log(
            'Son los datos del pokemon individual ->',
            //item.abilities[0],
        ); */

        console.log(item.stats[0].base_stat);
        
        abilidades.map((i) => {
            console.log(i.ability.name);
            setArrayAbilidades([...arrayAbilidades, i.ability.name])
            arreglosmoves.push(i.ability.name)
        })
        setColorP(item.types[0].type.name);
        setImagePokemon(item.sprites.front_default);
        //abilidadesFOR()
        console.log(arreglosmoves, "sdaasd ");
    }, []);

    function abilidadesFOR() {
        abilidades.map(function (news, i) {
            return (
                <View key={i} style={{ height: heightPercentageToDP(10) }}>
                    {console.log(news.ability.name)}
                    <Text style={{ color: 'black', backgroundColor: 'red' }}>{news.ability.name}</Text>
                    {/*  <TextUI txt={news.ability.name} style={'textoTitulo'} addStyle={{fontSize: 15}} /> */}
                </View>
            )
        })
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={backgroundColorNewFormat[colorP]}
            />
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: backgroundColorNewFormat[colorP] },
                ]}>
                <View style={styles.header}>
                    <Icon
                        type="material-community"
                        name="close"
                        size={40}
                        color={'black'}
                        onPress={() => {
                            navigation.navigate('Pokedex');
                        }}
                    />
                </View>
                <View style={styles.bodyTop}>
                    <TextUI
                        style={'titleBold'}
                        txt={item.name}
                        addStyle={{ color: coloresFigma['white'] }}
                    />
                    <Image
                        source={
                            imagePokemon ? (
                                { uri: imagePokemon }
                            ) : (
                                <> {console.log('No hay nada.')}</>
                            )
                        }
                        resizeMode="contain"
                        style={{
                            width: widthPercentageToDP(60),
                            height: widthPercentageToDP(60),
                            position: 'relative',
                            zIndex: 1,
                        }}
                    />
                </View>
                <View style={{ flex: 0.5, }}>
                    <View style={styles.formatoDebajo}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#732119', '#D93E30', '#D93E30']} style={styles.formatoDebajo} >
                            <View style={[styles.abilities, { marginTop: widthPercentageToDP(12) }]}>
                                <TextUI txt={'Abilities'} style={'textoTitulo'} />
                                <TextUI txt={arreglosmoves} style={'textoTitulo'} />

                            </View>
                            <View style={styles.abilities}>
                                <TextUI txt={'Healthy Points'} style={'textoTitulo'} addStyle={{ fontSize: 14, marginBottom: 5 }} />
                                <TextUI txt={hp * 1000} style={'textoTitulo'} addStyle={{ fontSize: 14, fontWeight: 'bold', marginLeft: widthPercentageToDP(5) }} />
                                <View style={styles.progressive}>
                                    <View style={[styles.carga, {
                                        width: hp ,
                                    }]}></View>
                                </View>

                                <TextUI txt={'Experience'} style={'textoTitulo'} addStyle={{ fontSize: 14 }} />
                                <TextUI txt={item.base_experience * 1000} style={'textoTitulo'} addStyle={{ fontSize: 14, fontWeight: 'bold', marginLeft: widthPercentageToDP(5) }} />
                                <View style={styles.progressive}>
                                    <View style={[styles.carga, {
                                        width: item.base_experience-100,
                                        backgroundColor: backgroundColorNewFormat['electric'],
                                    }]}></View>
                                </View>
                            </View>


                            <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: 'space-around', marginTop: widthPercentageToDP(10),  marginHorizontal: widthPercentageToDP(5) }}>
                                <Power nvl={attack} typePower={'Attack'} />
                                <Power nvl={deffense} typePower={'Defense'}/>
                                <Power nvl={spAttack} typePower={'SPAttack'}/>
                                <Power nvl={spDeffense} typePower={'SPDefense'}/>
                            </View>

                        </LinearGradient>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        alignItems: 'flex-start',
        padding: widthPercentageToDP(2),
    },
    bodyTop: {
        flex: 0.3,
        alignItems: 'center',
        position: 'relative',
        //backgroundColor: 'red',
    },
    formatoDebajo: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(70),
        backgroundColor: coloresFigma['Danger'],
        borderTopRightRadius: widthPercentageToDP(5),
        borderTopLeftRadius: widthPercentageToDP(5),
        alignItems: 'center',
    },
    abilities: {
        backgroundColor: coloresFigma['white'],
        width: widthPercentageToDP(90),
        padding: 15,
        //height: heightPercentageToDP(30),
        marginTop: widthPercentageToDP(5),
        borderRadius: 20,
    },
    progressive: {
        width: widthPercentageToDP(70),
        backgroundColor: 'white',
        // opacity: 0.4,
        borderRadius: 20,
        marginTop: widthPercentageToDP(1),
        marginBottom: widthPercentageToDP(1),
    },
    carga: {
        padding: widthPercentageToDP(2),
        backgroundColor: backgroundColorNewFormat['grass'],
        borderRadius: 20,
        opacity: 1,
    }
});
