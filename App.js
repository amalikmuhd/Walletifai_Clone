import react from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import HomeScreen from "./app/screens/HomeScreen";
import ResetScreen from "./app/screens/ResetScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen name="reset" component={ResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen />
    // <View
    //   style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    // >
    //   <LoginScreen />
    // </View>
  );
}
