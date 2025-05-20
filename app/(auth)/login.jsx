import { StyleSheet } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useUser();

  const handleSubmit = async () => {
    try {
      await login(email, password);
      console.log("current user is: ", user);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Login to Your Account</ThemedText>
      <ThemedTextInput
        placeholder="Email"
        style={{ width: "80%", marginBottom: 20 }}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <ThemedTextInput
        placeholder="Password"
        style={{ width: "80%", marginBottom: 20 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <ThemedButton
        onPress={handleSubmit}
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
