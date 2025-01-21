import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constans/colors";

function PrimaryButton({ childern, onPress }) {
  function pressHanlder() {
    console.log("Button Pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.container}
        onPress={onPress}
        android_ripple={{ color: "#ddb52f" }}
      >
        <Text>{childern}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ddb52f",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#72063c",
    fontSize: 16,
    fontWeight: "bold",
  },
});
