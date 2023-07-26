import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { Appearance } from "react-native";

type ThemeContextType = "light" | "dark";
interface ThemeContextValues {
  theme: ThemeContextType;
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
}

const defaultMode = Appearance.getColorScheme();

const ThemeContext = createContext<ThemeContextValues>({
  theme: defaultMode ?? "light",
  setTheme: () => {},
});

interface CustomThemeProviderProps {
  children: ReactNode;
}

const useThemeContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};

export { ThemeContext, useThemeContext };
