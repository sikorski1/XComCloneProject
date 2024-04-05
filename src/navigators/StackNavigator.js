import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage"
import CategoriesFinder from "../components/CategoriesFinder";
import ProductList from "../components/ProductList";
const Stack = createNativeStackNavigator();
export default function StackNavigator()
{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
            <Stack.Screen name="Main" component={MainPage}></Stack.Screen>
            <Stack.Screen name="Categories" component={CategoriesFinder}
                options={
                    { animation: "fade_from_bottom" }
                }>
            </Stack.Screen>
            <Stack.Screen name="Product" component={ProductList}
                options={
                    { animation: "fade" }
                }>
            </Stack.Screen>
        </Stack.Navigator>
    )
}