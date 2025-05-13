import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

import Spacer from "../../components/Spacer";

const Books = () => {
  return (
    <ThemedView style={styles.container} isSafe={true}>
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>
      <Spacer height={20} />
    </ThemedView>
  );
};

export default Books;

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
