import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Color from "./utils/Color";
import GameOver from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function gameOverHandler() {
    setGameIsOver(true)
  }

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver />
  }

  return (
    <LinearGradient
      colors={[Color.primary700, Color.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
