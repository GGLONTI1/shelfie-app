import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
