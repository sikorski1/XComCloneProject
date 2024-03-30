import { View, StyleSheet, Text, TextInput, FlatList, Image } from "react-native"
import { useState } from "react"
import {solution2data} from "../data/LabExercisesData"
export const Container = ({ children }) => (
    <View style={styles.container}>
        <View style={styles.underline}></View>
        {children}
        <View style={styles.underline}></View>
    </View>
)

export const Solution1 = () =>
{
    const [name, setName] = useState("Bob")
    return (
        <View style={{ paddingVertical: 20 }}>
            <Text style={{ marginBottom: 20, fontSize: 30 }}>Witaj {name}</Text>
            <TextInput style={{ borderWidth: 1, borderRadius: 15, padding: 5, fontSize: 20, textAlign: "center" }}
                placeholder="Wpisz imię"
                onChangeText={setName}></TextInput>
        </View>
    )
}

export const Solution2 = () => (
    <View style={{flex:1, paddingVertical:10}}>
        <FlatList
            data={solution2data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={
                ({ item, index }) =>
                {
                    return (
                        <View key={item.id}
                            style={[styles.cardContainer,
                            { marginRight: index === solution2data.length - 1 ? 10: 0}]}>
                            <Image style={{width:50, height:50}} source={item.img} ></Image>
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
        backgroundColor:"white",
        borderRadius: 10,
        elevation: 5,
    }
})