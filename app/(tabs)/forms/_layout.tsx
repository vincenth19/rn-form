import BtnSwitchTheme from "@/components/BtnSwitchTheme";
import { Stack } from "expo-router";
import { Platform } from "react-native";

const FormsLayout = () => {
  const isMobile = Platform.OS === "android" || Platform.OS === "ios";
  return (
    <Stack
      screenOptions={{ headerRight: () => isMobile && <BtnSwitchTheme /> }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: isMobile,
          headerTitle: "Forms",
        }}
      />
      <Stack.Screen name="simple" options={{ headerTitle: "Simple Form" }} />
    </Stack>
  );
};

export default FormsLayout;
