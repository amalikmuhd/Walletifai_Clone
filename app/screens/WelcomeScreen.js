import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

function WelcomeScreen(props) {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "15%",
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          // width: "66%",
          height: "35%",
          backgroundColor: "skyblue",
        }}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 40 }}>Hi Mom!!!</Text>
        </View>
      </View>
      <View
        style={{
          height: "50%",
          backgroundColor: "steelblue",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
