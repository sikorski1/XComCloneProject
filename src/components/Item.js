import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { DATA } from '../data/DATA';
import { styles } from '../styles/firstSStyle';


export const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    imageUri: data[index].image,
});

export const getItemCount = () => DATA.length;

export const Item = ({ title, imageUri, index}) =>(
    <View style={styles.item}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.title, {color: index==DATA.length-1 ? "#be0064": "black"} ]}>{title}</Text>
        <Image source={imageUri} style={styles.image} />
    </View>
);
