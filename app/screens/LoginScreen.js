import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

function LoginScreen(props) {
  return (
    <View style={styles.signupContainer}>
      <View style={styles.tagline}>
        <Text style={styles.signUpTitle}>Login</Text>
      </View>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        icon="email"
        placeholder="Enter your email address"
        textContentType="emailAddress"
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Enter your password"
        secureTextEntry
        textContentType="password"
      />

      <AppButton title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    width: "90%",
    alignItems: "center",
  },

  tagline: {
    alignItems: "center",
  },

  signUpTitle: {
    fontSize: 30,
  },
});

export default LoginScreen;
