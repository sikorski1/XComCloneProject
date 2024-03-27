import { View } from "react-native";
import { COLORS } from "./constants/colors.js"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./navigators/TabNavigator.js";
const Stack = createNativeStackNavigator();
export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="Tab"
        component={TabNavigator}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
