import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { auth } from "../networking/firebase";

function ResetScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const pushNavigation = () => {
    navigation.navigate("login");
  };

  const handleLogin = () => {
    auth()
      .sendPasswordResetEmail(email, password)
      .then(() => {
        alert(
          "Instructions on how to reset your Password has been sent via your email"
        );
        pushNavigation();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.signupContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/forgotpassword.png")}
        />
        <View style={styles.logoContainer}>
          <Text style={styles.titleTag}>Forget your Password?</Text>

          <Text style={styles.tagline}>
            Enter your email address and we we'll send you a link to reset your
            password
          </Text>
        </View>

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email address"
          textContentType="emailAddress"
        />

        <AppButton title="Send" onPress={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 100,
    marginVertical: 50,
  },
  signupContainer: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
  },

  tagline: {
    alignItems: "center",
  },

  signUpTitle: {
    fontSize: 30,
  },

  logoContainer: {
    width: "100%",
  },

  titleTag: {
    textAlign: "center",
    fontSize: 20,
    opacity: 0.7,
  },
  tagline: {
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    fontSize: 18,
    color: "#000",
    opacity: 0.5,
    lineHeight: 30,
  },
});

const act = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default ResetScreen;
