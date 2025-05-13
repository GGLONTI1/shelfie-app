import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Login to Your Account</ThemedText>
      <ThemedButton
        onPress={() => console.log("Login Pressed")}
        style={{ width: 300 }}
        btnText="Login"
        textStyles={{ fontWeight: "light" }}
      />
      <Spacer height={100} />
      <Link href={"/register"}>
        <ThemedText>Register Noww</ThemedText>
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
