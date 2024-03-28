import { View } from "react-native";
import { COLORS } from "./constants/colors.js"
import { ICONS } from "./constants/icons.js"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import StackNavigator from "./navigators/StackNavigator.js";
import SearchPage from "./pages/SearchPage.js"
import ShopListPage from "./pages/ShopListPage.js"
import BasketPage from "./pages/BasketPage.js"
import SignUpPage from "./pages/SignUpPage.js"

const Tab = createBottomTabNavigator();
export default function App()
{
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false
        }}>
        <Tab.Screen
          name="StackMainPage"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused ? ICONS.homeNavIconSharp : ICONS.homeNavIconOutline
            )
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused ? ICONS.searchNavIconSharp : ICONS.searchNavIconOutline
            )
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="ShopList"
          component={ShopListPage}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused ? ICONS.shopListNavIconSharp : ICONS.shopListNavIconOutline
            )
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="BasketPage"
          component={BasketPage}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused ? ICONS.basketNavIconSharp: ICONS.basketNavIconOutline
            )
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused ? ICONS.signUpNavIconSharp : ICONS.signUpNavIconOutline
            )
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
