import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { heightPercentageToDP } from "react-native-responsive-screen";
import ModalMenu from "../../views/Modal/ModalMenu";

export default function Header ({navigation, pokeNavigate, pokeLegendarios, ...props }){
    const [showMenu, setShowMenu] = useState(false)
    return(
        <View style={styles.header}>
            <Image source={require('../../assets/img/pokeLogo-modified.png')} resizeMode='contain' style={{ width: 100, height: 100 }} />
                <Icon type="material-community" name="menu" size={30} color='black' onPress={()=>setShowMenu(true)}/>
                <ModalMenu isVisible={showMenu} setVisible={setShowMenu} navigation={navigation} pokeNavigate={pokeNavigate} pokeLegendarios={pokeLegendarios} nameAux = {props.nameAux}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: heightPercentageToDP(100)
    },
    header: {
        //flex: 0.08
        height: heightPercentageToDP(7),
        elevation: 10,
        backgroundColor: '#F5DB13',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 30/// AGREGAR REACT NATIVE RESPONSIVE ...
    },
})