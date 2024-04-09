import { View, StyleSheet, Text, TextInput, FlatList, Image } from "react-native"
import { useState } from "react"
import { solution2data } from "../data/LabExercisesData"
export const Container = ({ children }) => (
    <View style={styles.container}>
        <View style={styles.underline}></View>
        {children}
        <View style={styles.underline}></View>
    </View>
)


export const Solution1 = () => {
    const [text, setText] = useState('Bob');
    const [savedText, setSavedText] = useState('');

    const handleTextChange = newText => {
        setSavedText(newText);
    };

    const handleInputSubmit = () => {
        setText(savedText);
        setSavedText('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.underline}></View>
            <Text style={styles.text}>Witaj {text}</Text>
            <TextInput
                value={savedText}
                onChangeText={handleTextChange}
                onSubmitEditing={handleInputSubmit}
                placeholder="Wpisz imię"
                style={[styles.input, { minWidth: 20, width: 'auto' }]} // ustawia mimalną szerokość, ale jeśli jest za dużo tekstu to poszerza się
            />
            <View style={styles.underline}></View>
        </View>
    );
};

export default Container;

export const Solution2 = () => (
    <View style={{ flex: 1, paddingVertical: 10 }}>
        <FlatList
            data={solution2data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={
                ({ item, index }) => {
                    return (
                        <View key={item.id}
                            style={[styles.cardContainer,
                            { marginRight: index === solution2data.length - 1 ? 10 : 0 }]}>
                            <Image style={{ width: 50, height: 50 }} source={item.img} ></Image>
                            <Text>{item.text}</Text>
                        </View>
                    )
                }
            }
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: "center",
        backgroundColor: "lightgray"
    },

    underline: {
        height: 1,
        width: "100%",
        backgroundColor: "black"
    },

    cardContainer: {
        marginLeft: 10,
        paddingVertical: 10,
        width: 100,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginVertical: 20,
        alignSelf: 'center',
        borderRadius: 10,
    },
})