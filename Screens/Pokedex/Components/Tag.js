import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageStore, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/Colors';

function Tag({type}) {
    return (
        <View style={{
            borderRadius: 35, backgroundColor: colors[type], width: "70%", marginRight: 5,
            padding: 5,
            marginTop: 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text >{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        </View>
    );
}

export default Tag;