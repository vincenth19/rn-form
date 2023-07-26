import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      <Link href="/forms/simple">
        <Text style={{ fontSize: 20 }}>To Simple Form</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
