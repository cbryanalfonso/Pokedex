import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import ModalMenu from "../../views/Modal/ModalMenu";

export default function Header ({navigation}){
    const [showMenu, setShowMenu] = useState(false)
    return(
        <View style={styles.header}>
            <Image source={require('../../assets/img/pokeLogo-modified.png')} resizeMode='contain' style={{ width: 100, height: 100 }} />
                <Icon type="material-community" name="menu" size={30} color='black' onPress={()=>setShowMenu(true)}/>
                <ModalMenu isVisible={showMenu} setVisible={setShowMenu} navigation={navigation}/>
        </View>
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
})