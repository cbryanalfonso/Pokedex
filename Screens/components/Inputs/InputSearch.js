import React from "react";
import { Icon, Input } from "react-native-elements";


const InputSearch =({...props}) =>{
    return(
        <Input
            value={props.value}
            placeholder={props.placeholder}
            leftIcon={<Icon type="material-community" name="magnify" size={19} color={'black'} />}
            inputContainerStyle={{borderBottomWidth: 0}}
            
            onChangeText={value => onChangeText(value)}
            style={[{color: '#212121'},props.addStyle ? props.addStyle : null]}
        />
    )
}

export default InputSearch;