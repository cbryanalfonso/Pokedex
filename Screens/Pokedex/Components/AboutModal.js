import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutModal({ navigation, isVisible, setVisible }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
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
        fontWeight: 'bold',
        paddingVertical: 7
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

/*


<Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            style={{backgroundColor: 'red', flex: 1}}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{
                    flex: 0.5, backgroundColor: 'white',
                    borderTopLeftRadius: 30, borderTopRightRadius: 30,
                }}>
                    <View style={{
                        flex: 1.5,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>

                        <TouchableOpacity style={{ padding: 20 }}
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
                        <View style={{ flex: 4, flexDirection: 'row', }}>
                            <View style={{ flex: 1, paddingLeft: 30 }}>
                                <Text style={styles.txtAbout}>Species</Text>
                                <Text style={styles.txtAbout}>Height</Text>
                                <Text style={styles.txtAbout}>Weight</Text>
                                <Text style={styles.txtAbout}>Abilities</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={styles.txtAboutInformacion}>Evolution</Text>
                                <Text style={styles.txtAboutInformacion}>Evolution</Text>
                                <Text style={styles.txtAboutInformacion}>Evolution</Text>
                                <Text style={styles.txtAboutInformacion}>Evolution</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2.5 }}>

                        </View>
                    </View>
                </View>
            </View>

        </Modal>

*/