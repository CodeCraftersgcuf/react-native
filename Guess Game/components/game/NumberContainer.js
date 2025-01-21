import { View, Text, StyleSheet } from "react-native-web";
import Colors from "../../constans/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.cusYellow,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.cusYellow,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
