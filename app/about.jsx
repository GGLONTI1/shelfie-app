import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <Link href={"/"} style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
