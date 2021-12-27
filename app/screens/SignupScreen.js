import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";

import AppTextInput from "../components/AppTextInput";
import OutlineButton from "../components/OutlineButton";

import { auth } from "../networking/firebase";
import { getAuth, sendEmailVerification } from "firebase/auth";

function SignupScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const pushNavigation = () => {
    navigation.navigate("home");
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with:", user.email);

        pushNavigation();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.signupContainer}>
      <Image style={styles.logo} source={require("../assets/Wlogo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email address"
        textContentType="emailAddress"
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry={true}
        textContentType="password"
      />

      <OutlineButton title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginVertical: 50,
  },
  signupContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
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
