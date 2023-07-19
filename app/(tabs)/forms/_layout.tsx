import { Stack } from "expo-router";

const FormsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Forms" }} />
      <Stack.Screen name="simple" options={{ headerTitle: "Simple Form" }} />
    </Stack>
  );
};

export default FormsLayout;
