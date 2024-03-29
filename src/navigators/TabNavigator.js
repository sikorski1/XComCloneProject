import { ICONS } from "../constants/icons.js"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { styles } from "../styles/tabNavigationStyle.js"
import { TabBarIcon } from "./TabBarIcon.js"
import StackNavigator from "../navigators/StackNavigator.js";
import SearchPage from "../pages/SearchPage.js"
import ShopListPage from "../pages/ShopListPage.js"
import BasketPage from "../pages/BasketPage.js"
import SignUpPage from "../pages/SignUpPage.js"
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
                    component={StackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? ICONS.homeNavIconSharp : ICONS.homeNavIconOutline
                    }}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="SearchPage"
                    component={SearchPage}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? ICONS.searchNavIconSharp : ICONS.searchNavIconOutline
                        )
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="ShopList"
                    component={ShopListPage}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? ICONS.shopListNavIconSharp : ICONS.shopListNavIconOutline
                        )
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="BasketPage"
                    component={BasketPage}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? ICONS.basketNavIconSharp : ICONS.basketNavIconOutline
                        )

                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="SignUpPage"
                    component={SignUpPage}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? ICONS.signUpNavIconSharp : ICONS.signUpNavIconOutline
                        )
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}