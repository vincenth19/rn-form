const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

type color = {
  text: string;
  placeholderText: string;
  background: string;
  inputBackground: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  border: string;
  error: string;
};

type ColorTheme = {
  light: color;
  dark: color;
};

const Colors: ColorTheme = {
  light: {
    text: '#000',
    placeholderText: '#949494',
    background: '#fff',
    inputBackground: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    border: 'gray',
    error: 'red',
  },
  dark: {
    text: '#fff',
    placeholderText: 'gray',
    background: '#000',
    inputBackground: '#1b1b1b',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    border: '#949494',
    error: 'red',
  },
};

export default Colors;
