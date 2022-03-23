import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { coloresFigma } from "../../assets/Colors";


export default function Button ({...props}){
    return(
        <TouchableOpacity style={[getButtonStyle(props.style), props.addStyle]} onPress={props.onPress}>
            <Text style={[getTextStyle(props.style)]} >{props.txt}</Text>
        </TouchableOpacity>
    )
}

const getButtonStyle = style => {
    switch (style) {
        case 'botonInicio':
            return{
                backgroundColor: '#73D677',
                width: "80%",
                paddingVertical: 15,
                borderRadius: 20,
                elevation: 10
            }   
            case 'botonReturn':
                return{
                    backgroundColor: coloresFigma['Thirf'],
                    width: "80%",
                    paddingVertical: 15,
                    borderRadius: 20,
                    elevation: 10
                }   
        
        default:
            return {
                color: '#FFFFFF',
                fontSize: 25,
            };
    }
};

const getTextStyle = style =>{
    switch(style){
        case 'botonInicio':
            return{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 23,
                textAlign: 'center',
            }
            case 'botonReturn':
                return{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 23,
                    textAlign: 'center',
                }
            default:
                return {
                    color: '#FFFFFF',
                    fontSize: 25,
                };
    }
}