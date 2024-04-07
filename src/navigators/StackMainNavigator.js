import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage"
import CategoriesFinder from "../components/CategoriesFinder";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import SearchPage from "../pages/SearchPage";
const Stack = createNativeStackNavigator();

export default function StackMainNavigator()
{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
            <Stack.Screen name="Main" component={MainPage}></Stack.Screen>
            <Stack.Screen name="Search" component={SearchPage}
                options={
                    { animation: "fade_from_bottom" }
                }>
            </Stack.Screen>
            <Stack.Screen name="Categories" component={CategoriesFinder}
                options={
                    { animation: "fade_from_bottom" }
                }>
            </Stack.Screen>
            <Stack.Screen name="ProductList" component={ProductList}
                options={
                    { animation: "fade" }
                }>
            </Stack.Screen>
            <Stack.Screen name="Product" component={Product}
                options={
                    { animation: "fade" }
                }>
            </Stack.Screen>
        </Stack.Navigator>
    )
}