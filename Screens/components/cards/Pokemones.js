import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import TextUI from "../Texto/TextUI";

export default function Pokemones({ item, navigation }) {
    const [imagePokemon, setImagePokemon] = useState('')
    const [attack, setAttack] = useState('')
    const [defense, setDefense] = useState('')
    useEffect(()=>{
        //console.log("tAMOS DENTROS->  ",item);
        fetch(item.url)
        .then((value) => value.json())
        .then(value=>{
            console.log("Nuevos datos -> ", value.stats[2]);
            setImagePokemon(value.sprites.front_default);
            setAttack(value.stats[1].base_stat);
            setDefense(value.stats[2].base_stat)
        })
    },[])
    return (
        <TouchableOpacity style={styles.btn}>
            <View style={{ flex: 0.9, backgroundColor: '#F6F7F9', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>
                <TextUI style={'titleNormal'} txt={item.name} addStyle={styles.txtStyle} />
                <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", paddingVertical: widthPercentageToDP(2) }}>
                    <View style={styles.nvlPoder}>
                        <TextUI style={'titleNormal'} txt={attack} addStyle={[styles.txtStyle, { fontWeight: 'normal', fontSize: 15, }]} />
                    </View>
                    <View style={styles.nvlPoder}>
                        <TextUI style={'titleNormal'} txt={defense} addStyle={[styles.txtStyle, { fontWeight: 'normal', fontSize: 15, }]} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", paddingVertical: widthPercentageToDP(2) }}>
                        <TextUI style={'titleNormal'} txt={"Attack"} addStyle={[styles.txtStyle, { fontWeight: 'normal', fontSize: 15, marginTop: widthPercentageToDP(-2) }]} />
                        <TextUI style={'titleNormal'} txt={"Defense"} addStyle={[styles.txtStyle, { fontWeight: 'normal', fontSize: 15,marginTop: widthPercentageToDP(-2) }]} />
                </View>
            </View>
{
    /**
     * imagePokemon ? {uri: imagePokemon} : 
                    <ActivityIndicator color="#05A8F3" size="large" />
     */
}
            <View style={{ flex: 1.1, backgroundColor: 'red', justifyContent: "center", alignItems: "center", borderTopRightRadius: 15,borderBottomRightRadius: 15}}>
                <Image source={imagePokemon ? {uri: imagePokemon} : 
                    <ActivityIndicator color="#05A8F3" size="large" />
                } resizeMode='contain' style={{width: widthPercentageToDP(100), height:widthPercentageToDP(30)}} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        //elevation: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical:widthPercentageToDP(2),
        //borderRadius: 15,
        //alignItems: "center",
        //backgroundColor: 'red',
    },
    txtStyle: {
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: 3,
        fontWeight: 'bold'
    },
    nvlPoder: {
        borderRadius: widthPercentageToDP(12),
        width: widthPercentageToDP(11),
        height: widthPercentageToDP(11),
        backgroundColor: 'white',
        borderWidth: widthPercentageToDP(0.7),
        borderColor: '#212121',
        justifyContent: "center",
        alignItems: "center",
    },
})