import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  function gameOverHanlder(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function onStartNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setGuessRounds(0);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOverHanlder} />;
  }
  if (gameIsOver) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={onStartNewGameHandler} />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#72063c", "#72063c"]}>
      <ImageBackground
        style={styles.rootScreen}
        source={{
          uri: "https://unsplash.com/photos/cosmetic-golden-oil-or-serum-liquid-background-3d-illustration-Gl0AiCT32tg",
        }}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}> {screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
