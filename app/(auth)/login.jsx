import { Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Login = () => {
  const [email, setEmail] = useState("");
  function onSubmit() {
    console.log("User Info:", email);
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Login to Your Account</ThemedText>
      <ThemedTextInput
        placeholder="Email"
        style={{ width: "80%", marginBottom: 20 }}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <ThemedButton
        onPress={onSubmit}
        style={{ width: 300 }}
        btnText="Login"
        textStyles={{ fontWeight: "light" }}
      />
      <Spacer height={100} />
      <Link href={"/register"}>
        <ThemedText>Register Now</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
