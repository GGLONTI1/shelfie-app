import { Text, View, Image, StyleSheet, useColorScheme } from "react-native";
import Logo from "../assets/logo3.png";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  const textColorStyle = { color: isDarkMode ? "white" : "black" };
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} />
      <Text style={[styles.title, textColorStyle]}>Reading List App</Text>
      <Spacer height={10} />
      <Link style={[styles.link, textColorStyle]} href="/about">
        About Page
      </Link>
      <Link style={[styles.link, textColorStyle]} href="/contact">
        Contact Page
      </Link>
      <Link style={[styles.link, textColorStyle]} href="/login">
        Login Page
      </Link>
      <Link style={[styles.link, textColorStyle]} href="/register">
        Register Page
      </Link>
      <Link style={[styles.link, textColorStyle]} href="/create">
        Create Page
      </Link>
      <Link style={[styles.link, textColorStyle]} href="/profile">
        Profile Page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
