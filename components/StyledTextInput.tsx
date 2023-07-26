import { TextInput, TextInputProps } from "./Themed";

const BASE_STYLE = {
  borderRadius: 5,
  padding: 16,
  height: 30,
  borderWidth: 1,
};

export function STextInput(props: TextInputProps) {
  return <TextInput {...props} style={[props.style, BASE_STYLE]} />;
}
