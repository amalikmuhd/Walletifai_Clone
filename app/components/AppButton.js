import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/Colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    height: 64,
    marginVertical: 20,
  },

  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default AppButton;
