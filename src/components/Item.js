import React from 'react';
import
{
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import { DATA } from '../data/DATA';
import { styles } from '../styles/firstSStyle'
import { useState, useRef } from 'react';
import { animationHoverHandle } from "../animations/animationHoverHandle";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import { stylesAnim } from "../styles/animationHoverStyle"
export const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    imageUri: data[index].image,
});

export const getItemCount = () => DATA.length;

export const Item = ({ title, imageUri, index }) =>
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <TouchableWithoutFeedback onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 180)} onPressOut={() =>
        {
            animationHoverDropHandle(hoverDropAnimation);
            setTimeout(()=>{
                hoverAnimation.setValue(0)
                setShowAnim(false)
                hoverDropAnimation.setValue(1)
            }, 200)
        }}>
            <View style={styles.item}>
                {showAnim && (<Animated.View style={[stylesAnim.hoverItems,  
                    { top: AnimPosition.y, left: AnimPosition.x }, { opacity: hoverDropAnimation }, { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
                <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.title, { color: index == DATA.length - 1 ? "#be0064" : "black" }]}>{title}</Text>
                <Image source={imageUri} style={styles.image} />
            </View>
        </TouchableWithoutFeedback>)
}