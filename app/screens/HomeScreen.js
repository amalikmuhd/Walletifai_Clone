import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppButton from "../components/AppButton";
import { auth } from "../networking/firebase";

function HomeScreen({ navigation }) {
  const returnHome = () => {
    navigation.navigate("welcome");
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        returnHome();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth().currentUser?.email} is signed in</Text>
      <AppButton title="Sign me out" onPress={handleSignOut} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
