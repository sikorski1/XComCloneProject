import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { useState, useRef } from "react";
import { styles } from "../styles/productListStyle";
import { stylesAnim } from "../styles/animationHoverStyle";
import { animationHoverHandle, animationHoverDropHandle, AnimComponent } from "../animations/animationHoverHandle";


export default function ProductListCard({ data, navigation }) {
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Product")}
                onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 200, 5.6)}
                onPressOut={() => {
                    animationHoverDropHandle(hoverDropAnimation)
                    setTimeout(() => {
                        setShowAnim(false)
                        hoverDropAnimation.setValue(1)
                    }, 200)
                }}>
                <View style={styles.productCard}>
                    <AnimComponent
                        animPosition={animPosition}
                        showAnim={showAnim}
                        hoverAnimation={hoverAnimation}
                        duration={200}
                        toValue={5}
                        hoverDropAnimation={hoverDropAnimation}
                        styles={stylesAnim.hoverProductList}
                        shiftX={90}
                        shiftY={30} />
                    <View style={styles.imgBox}>
                        <Image style={styles.productImg} source={{ uri: data.img }}></Image>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.cardTitle}>{data.name}</Text>
                        {data.info.map((data, index) => (
                            <Text numberOfLines={1} style={styles.productInfo} key={index}>{data}</Text>
                        ))}
                    </View>
                    <Text style={styles.productPrice}>{data.price}</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.underline}></View>
        </>
    )
}