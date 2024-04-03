import { View, Text, Animated, Image } from "react-native"
import { useState, useRef } from "react"
import { ICONS } from "../constants/icons.js";
import { styles } from "../styles/categoriesFinderStyles"
import { stylesAnim } from "../styles/animationHoverStyle.js";
import { AnimComponent } from "../animations/animationHoverHandle.js"
export default function CategoryCard({ data, index })
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const itemData = data[index]
    return (
        <>
            <View style={styles.cardBox}>
                <AnimComponent
                animPosition={animPosition}
                setAnimPosition={setAnimPosition}
                showAnim={showAnim}
                setShowAnim={setShowAnim}
                hoverAnimation={hoverAnimation}
                duration={200}
                toValue={4}
                hoverDropAnimation={hoverDropAnimation}
                styles = {stylesAnim.hoverCategoriesFinder}/>
                <View style={styles.cardImgBox}>
                    <Image style={styles.cardImg} source={itemData.img} />
                </View>
                <Text style={styles.cardText}>{itemData.name}</Text>
                <Text style={styles.cardIcon}>{ICONS.rightArrowIcon2}</Text>
            </View>
            <View style={styles.cardUnderline}></View>
        </>
    )
}