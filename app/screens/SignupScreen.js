import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";
import OutlineButton from "../components/OutlineButton";

function SignupScreen(props) {
  return (
    <View style={styles.signupContainer}>
      <View style={styles.tagline}>
        <Text style={styles.signUpTitle}>Sign Up</Text>
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

      <OutlineButton title="Sign Up" />
      {/* <View style={styles.tagline}>
        <Text>Your password must have the following</Text>
      </View>
      <View style={styles.tagline}>
        <Text>Between 6-40 characters</Text>
      </View>
      <View style={styles.tagline}>
        <Text>One special character</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    width: "90%",
    alignItems: "center",
    // alignSelf: "center",
    // alignContent: "center",
  },

  tagline: {
    // width: "70%",
    alignItems: "center",
  },

  signUpTitle: {
    fontSize: 30,
  },
});

export default SignupScreen;
