import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../pages/SearchPage";
import Product from "../components/Product";
const Stack = createNativeStackNavigator();

export default function StackSearchNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
            <Stack.Screen name="Search" component={SearchPage}></Stack.Screen>
            <Stack.Screen name="Product" component={Product}
                options={
                    { animation: "fade" }
                }>
            </Stack.Screen>
        </Stack.Navigator>
    )
}