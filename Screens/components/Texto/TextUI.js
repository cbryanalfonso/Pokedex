import React from "react";
import { Text } from "react-native";

export default function({...props}){
    return(
        <Text style={[getTextStyle(props.style), props.addStyle]} onPress={props.onPress}>
            {props.txt}
        </Text>
    )
}

const getTextStyle = color => {
    switch (color) {
        case 'titleNormal':
            return{
                fontSize: 42,
                color: 'black',
            }
        case 'titleBold':
            return{
                fontSize: 42,
                color: 'black',
                fontWeight: 'bold'
            }
        case 'textoTitulo':
            return{
                fontSize: 24,
                color: 'black',
            }
        case 'textoMenu':
            return{
                fontSize: 27,
                color: 'black',
                paddingVertical: 6,
            }
        default:
            return {
                color: '#FFFFFF',
                fontSize: 25,
            };
    }
};