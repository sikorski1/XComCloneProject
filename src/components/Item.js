import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { DATA } from '../constants/DATA';
import { styles } from '../styles/firstSStyle';


export const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    imageUri: data[index].image,
});

export const getItemCount = () => DATA.length;

export const Item = ({ title, imageUri }) => (
    <View style={styles.item}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
        <Image source={imageUri} style={styles.image} />
    </View>
);
