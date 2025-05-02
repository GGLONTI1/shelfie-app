import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Contact Page
      </ThemedText>
      <Link
        style={[styles.link, { marginVertical: 10, borderBottomWidth: 1 }]}
        href="/"
      >
        <ThemedText>Back to Home Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

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
