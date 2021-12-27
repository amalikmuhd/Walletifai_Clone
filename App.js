import react from "react";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import AppButton from "./app/components/AppButton.js";
import { View, StyleSheet, SafeAreaView } from "react-native";
import AppTextInput from "./app/components/AppTextInput.js";

export default function App() {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <WelcomeScreen />
    // </View>
  );
}
