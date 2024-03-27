import { View } from "react-native";
import { COLORS } from "./constants/colors.js"
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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Stack"
          component={StackNavigator}
        ></Tab.Screen>
        <Tab.Screen
          name="SearchPage"
          component={SearchPage}
        ></Tab.Screen>
        <Tab.Screen
          name="ShopList"
          component={ShopListPage}
        ></Tab.Screen>
        <Tab.Screen
          name="BasketPage"
          component={BasketPage}
        ></Tab.Screen>
        <Tab.Screen
          name="SignUpPage"
          component={SignUpPage}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
