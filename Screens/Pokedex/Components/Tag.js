import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageStore, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/Colors';

function Tag({type}) {
    return (
        <View style={{
            borderRadius: 20, backgroundColor: colors[type], width: "55%", marginRight: 5,
            padding: 5,
            marginTop: 2,
        }}>
            <Text >{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        </View>
    );
}

export default Tag;