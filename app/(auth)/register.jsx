import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";
import { Text } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, register } = useUser();

  const handleSubmit = async () => {
    try {
      await register(email, password);
      console.log("current user is: ", user);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        {/* <ThemedText title={true}>Register For an Account</ThemedText> */}
        <Text title={true} style={{ color: "#f2f2f2" }}>
          Register For an Account
        </Text>
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ThemedButton
          onPress={handleSubmit}
          style={{ width: 300 }}
          btnText="Register"
          textStyles={{ fontWeight: "light" }}
        />
        <Spacer height={100} />
        <Link href={"/login"}>
          <ThemedText style={{ textAlign: "center" }}>Login Now</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
