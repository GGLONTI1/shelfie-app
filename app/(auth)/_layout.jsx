import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const user = useUser();
  console.log(user);

  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
