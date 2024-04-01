import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage"
import CategoriesFinder from "../components/CategoriesFinder";
const Stack = createNativeStackNavigator();
export default function StackNavigator()
{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
            <Stack.Screen name="Main" component={MainPage}></Stack.Screen>
            <Stack.Screen name="Categories" component={CategoriesFinder}
                options={
                    {animation: "fade_from_bottom"}
                }>
            </Stack.Screen>
        </Stack.Navigator>
    )
}