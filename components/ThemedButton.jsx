import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedButton = ({ style, btnText = "Click", textStyles, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed, style]}
      {...props}
    >
      <Text style={[{ color: "#f2f2f2", textAlign: "center" }, textStyles]}>
        {btnText}
      </Text>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  btnPressed: {
    opacity: 0.5,
  },
});
