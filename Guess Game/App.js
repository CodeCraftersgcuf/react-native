import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./screens/Game";

export default function App() {
  const [userNumber, setUserNumber] = useState();


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen= <StartGame onPickNumber={pickedNumberHandler}/>

  if (userNumber){
    screen = <Game/>
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
        {screen}
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
