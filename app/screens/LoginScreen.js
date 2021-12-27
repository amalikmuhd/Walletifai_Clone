import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import {} from "react-native-web";

import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { auth } from "../networking/firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, isLoading] = useState(false);

  const pushNavigation = () => {
    navigation.navigate("home");
  };

  const resetPassword = () => {
    navigation.navigate("reset");
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in  with:", user.email);
        // setLoading(true);

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>;
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

        <AppButton title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={resetPassword}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
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

export default LoginScreen;
