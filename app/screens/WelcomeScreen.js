import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

import colors from "../config/Colors";
import AppButton from "../components/AppButton";
import OutlineButton from "../components/OutlineButton";

import { auth } from "../networking/firebase";

function WelcomeScreen({ navigation }) {
  const loginScreen = () => {
    navigation.navigate("login");
  };

  const registerScreen = () => {
    navigation.navigate("signup");
  };

  useEffect(() => {
    const unsubcribe = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("home");
      }
    });

    return unsubcribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/walkthrough.png")}
      />
      <View style={styles.logoContainer}>
        <Text style={styles.titleTag}>Budget Smart</Text>

        <Text style={styles.tagline}>
          We predict how much you will spend in a pay cycle and track your
          actual spending to help you stay on budget.
        </Text>
      </View>
      <AppButton title="Sign Up" onPress={registerScreen} />
      <OutlineButton title="Login" onPress={loginScreen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#f1f1f1",
  },

  logo: {
    width: 100,
    height: 180,
    position: "absolute",
    top: "20%",
  },

  logoContainer: {
    width: "100%",
    position: "absolute",
    top: "50%",
  },

  titleTag: {
    textAlign: "center",
    fontSize: 20,
    opacity: 0.7,
  },
  tagline: {
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 20,
    fontSize: 18,
    color: "#000",
    opacity: 0.5,
    lineHeight: 30,
  },
});

export default WelcomeScreen;
