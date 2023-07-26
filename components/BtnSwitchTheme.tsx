import Colors from "@/constants/Colors";
import { useThemeContext } from "@/contexts/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable } from "react-native";

const BtnSwitchTheme: FC = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Pressable onPress={toggleTheme}>
      {({ pressed }) => (
        <FontAwesome
          name={theme === "light" ? "moon-o" : "sun-o"}
          size={25}
          color={Colors[theme ?? "light"].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  );
};

export default BtnSwitchTheme;
