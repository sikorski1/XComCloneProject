import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage"
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Main" component={MainPage}></Stack.Screen>
        </Stack.Navigator>
    )
}