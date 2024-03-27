import { StyleSheet } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MainPage from "../pages/MainPage";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Main" component={MainPage}></Tab.Screen>
        </Tab.Navigator>
    )
}