import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constans/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}> {children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
  },
});
