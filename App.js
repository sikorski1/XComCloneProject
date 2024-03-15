import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "./constants/colors.js";
import FirstSection from "./components/FirstSection.js";
import Container from "./components/Container.js"
export default function App()
{
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
      <FirstSection></FirstSection>
    </View>
  )
}
