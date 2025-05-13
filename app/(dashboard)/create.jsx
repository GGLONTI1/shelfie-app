import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading} title={true}>
        Add a new Book
      </ThemedText>
      <Spacer height={20} />
    </ThemedView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
