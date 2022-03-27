import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Button from "../../components/Botones/Button";
import TextUI from "../../components/Texto/TextUI";
import ModalMenu from "../Modal/ModalMenu";

export default function Home({navigation}) {
    /***
         const [showModal, setShowModal] = useState(false)
  const [showPerfil, setShowPerfil] = useState(false)
    
    */
    const [showMenu, setShowMenu] = useState(false)
    const [visible, setVisible] = useState(true)
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5DB13', '#F4CC0E', '#F2B807']} style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/img/pokeLogo-modified.png')} resizeMode='contain' style={{ width: 100, height: 100 }} />
                <Icon type="material-community" name="menu" size={30} color='black' onPress={()=>setShowMenu(true)}/>
            </View>
            <View style={styles.body}>
                <Image source={require('../../assets/img/PikachoCompleto.png')} resizeMode='contain' style={{ width: '100%', height: 350 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 30,  justifyContent: "center"  }}>
                    <TextUI style={'titleBold'} txt={'Find'} addStyle={{textAlign: 'center', letterSpacing: 4}}/>
                    <TextUI style={'titleNormal'} txt={' all your '} addStyle={{textAlign: 'center',letterSpacing: 4}} />
                </View>
                <TextUI style={'titleNormal'} txt={'favorite'} addStyle={{textAlign: 'center',letterSpacing: 4}} />
                <TextUI style={'titleBold'} txt={' Pokemon'} addStyle={{textAlign: 'center',letterSpacing: 4}} />
                <TextUI style={'textoTitulo'} txt={'You can know the type of Pokemon, its strengths, disadvantages and abilities'}
                    addStyle={{textAlign: 'center', marginTop: 20}}
                />
            </View>
            <View style={{alignItems: "center"}}>
                <Button txt={'See pokemons'} style={'botonInicio'} onPress={()=> {navigation.navigate('Pokedex')}}/>
            </View>
            <ModalMenu isVisible={showMenu} setVisible={setShowMenu} navigation={navigation} pokeNavigate={()=>navigation.navigate('Pokedex')}/>
        </LinearGradient>
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
    body: {
        flex: 0.82,
    },
})