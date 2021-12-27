import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/Colors";

function OutlineButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    height: 60,
    marginVertical: 20,
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.primary,
    fontSize: 20,
  },
});

export default OutlineButton;
