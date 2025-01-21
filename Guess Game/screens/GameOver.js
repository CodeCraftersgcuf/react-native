import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://unsplash.com/photos/cosmetic-golden-oil-or-serum-liquid-background-3d-illustration-Gl0AiCT32tg",
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        {" "}
        Your phone needed <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number{" "}
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
});
