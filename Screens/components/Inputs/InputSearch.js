import React from "react";
import { Icon, Input } from "react-native-elements";


const InputSearch =({placeholder, value, onChangeText, addStyle}) =>{
    return(
        <Input
            value={value}
            placeholder={placeholder}
            leftIcon={<Icon type="material-community" name="magnify" size={19} color={'black'} />}
            inputContainerStyle={{borderBottomWidth: 0}}
            
            onChangeText={value => onChangeText(value)}
            style={[{color: '#212121'},addStyle ? addStyle : null]}
        />
    )
}

export default InputSearch;