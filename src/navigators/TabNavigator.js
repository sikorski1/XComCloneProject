import { ICONS } from "../constants/icons.js"
import { COLORS } from "../constants/colors.js"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { styles } from "../styles/tabNavigationStyle.js"
import StackMainNavigator from "./StackMainNavigator.js";
import StackSearchNavigator from "./StackSearchNavigator.js";
import ShopListPage from "../pages/ShopListPage.js"
import BasketPage from "../pages/BasketPage.js"
import SignUpPage from "../pages/SignUpPage.js"
import { Pressable } from "react-native";

export default function TabNavigator()
{
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabNav,
                }}>
                <Tab.Screen
                    name="StackMainPage"
                    component={StackMainNavigator}
                    options={({ navigation }) =>
                    ({
                        tabBarIcon: ({ focused }) =>
                            focused ?
                                ICONS.homeNavIconSharp
                                :
                                <Pressable
                                    android_ripple={{ color: COLORS.shadowVeryLight, radius: 45, borderless: true }}
                                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                                    onPress={() => navigation.navigate("StackMainPage")}>
                                    {ICONS.homeNavIconOutline}
                                </Pressable>
                    })}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="StackSearchPage"
                    component={StackSearchNavigator}
                    options={({ navigation }) =>
                    ({
                        tabBarIcon: ({ focused }) =>
                            focused ?
                                ICONS.searchNavIconSharp
                                :
                                <Pressable
                                    android_ripple={{ color: COLORS.shadowVeryLight, radius: 45, borderless: true }}
                                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                                    onPress={() => navigation.navigate("StackSearchPage")}>
                                    {ICONS.searchNavIconOutline}
                                </Pressable>
                    })}
                ></Tab.Screen>
                <Tab.Screen
                    name="ShopList"
                    component={ShopListPage}
                    options={({ navigation }) =>
                    ({
                        tabBarIcon: ({ focused }) =>
                            focused ?
                                ICONS.shopListNavIconSharp
                                :
                                <Pressable
                                    android_ripple={{ color: COLORS.shadowVeryLight, radius: 45, borderless: true }}
                                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                                    onPress={() => navigation.navigate("ShopList")}>
                                    {ICONS.shopListNavIconOutline}
                                </Pressable>
                    })}
                ></Tab.Screen>
                <Tab.Screen
                    name="BasketPage"
                    component={BasketPage}
                    options={({ navigation }) =>
                    ({
                        tabBarIcon: ({ focused }) =>
                            focused ?
                                ICONS.basketNavIconSharp
                                :
                                <Pressable
                                    android_ripple={{ color: COLORS.shadowVeryLight, radius: 45, borderless: true }}
                                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                                    onPress={() => navigation.navigate("BasketPage")}>
                                    {ICONS.basketNavIconOutline}
                                </Pressable>
                    })}
                ></Tab.Screen>
                <Tab.Screen
                    name="SignUpPage"
                    component={SignUpPage}
                    options={({ navigation }) =>
                    ({
                        tabBarIcon: ({ focused }) =>
                            focused ?
                                ICONS.signUpNavIconSharp
                                :
                                <Pressable
                                    android_ripple={{ color: COLORS.shadowVeryLight, radius: 45, borderless: true }}
                                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                                    onPress={() => navigation.navigate("SignUpPage")}>
                                    {ICONS.signUpNavIconOutline}
                                </Pressable>
                    })}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}