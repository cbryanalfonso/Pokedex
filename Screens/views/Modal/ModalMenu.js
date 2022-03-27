import React from "react";
import { Image, Modal, StatusBar, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import TextUI from "../../components/Texto/TextUI";

export default function ModalMenu({ navigation, isVisible, setVisible, pokeNavigate, pokeLegendarios, pokeTeam }) {
    return (
        <>
            <StatusBar
                backgroundColor={'#F4CC0E'}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    alert("Cerrando Menu.")
                }}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0.8 }} colors={['#F5DB13', '#F4CC0E', '#F2B807']} style={styles.containerMenu}>
                        <View style={styles.containerClose}>
                            <Icon type="material-community" name="close" size={30} color={'black'} onPress={() => setVisible(false)} />
                        </View>
                        <View style={styles.imgContainer}>
                            <Image source={require('../../assets/img/pokeLogo-modified.png')} resizeMode='contain' style={{ width: 150 }} />
                        </View>
                        <View style={[styles.imgContainer, { flex: 0.5 }]}>
                            <TextUI style={'textoMenu'} txt={' Pokedex '} addStyle={{ textAlign: 'center', letterSpacing: 3 }} onPress={() => {
                                /* navigation.navigate('Pokedex') */
                                pokeNavigate
                                setVisible(false)
                            }} />
                            <TextUI style={'textoMenu'} txt={' Legendarios '} addStyle={{ textAlign: 'center', letterSpacing: 3 }} onPress={() => { pokeLegendarios }} />
                            <TextUI style={'textoMenu'} txt={' Equipo '} addStyle={{ textAlign: 'center', letterSpacing: 3 }} />
                            <TextUI style={'textoMenu'} txt={' Documentación '} addStyle={{ textAlign: 'center', letterSpacing: 3 }} />
                        </View>

                    </LinearGradient>
                </View>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 0.4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 10,
    },
    imgContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
    },
    containerClose: {
        flex: 0.1,
        alignItems: "flex-end",
        paddingHorizontal: "7%",
        paddingTop: 10
    },
})