import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/walkthrough.png")}
      />
      <View style={styles.logoContainer}>
        <Text style={{ textAlign: "center", fontSize: 20, opacity: 0.7 }}>
          Budget Smart
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginTop: 50,
            marginHorizontal: 20,
            fontSize: 18,
            color: "#000",
            opacity: 0.5,
            lineHeight: 30,
          }}
        >
          We predict how much you will spend in a pay cycle and track your
          actual spending to help you stay on budget.
        </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 180,
    position: "absolute",
    top: "20%",
  },

  logoContainer: {
    width: "100%",
    // height: 100,
    position: "absolute",
    top: "50%",
  },
  loginButton: {
    height: 70,
    width: "70%",
    backgroundColor: "purple",
  },

  registerButton: {
    height: 70,
    width: "70%",
    backgroundColor: "orange",
    marginTop: 50,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#f1f1f1",
  },
});

export default WelcomeScreen;
