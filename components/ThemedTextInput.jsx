import { StyleSheet, TextInput, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      {...props}
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 4,
        },
        style,
      ]}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({});
