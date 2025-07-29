import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { use } from "react";
import Tittle from "../components/ui/Tittle";
import Color from "../utils/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

// const deviceWidth = Dimensions.get("window").width

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGamer,
}) {
  const { width, height } = useWindowDimensions();

  let ImageSize = 300;

  if (width < 380) {
    ImageSize = 150;
  }

  if (width < 400) {
    ImageSize = 80;
  }

  const ImageStyle = {
    width: ImageSize,
    height: ImageSize,
    borderRadius: ImageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Tittle>Game is Over</Tittle>
        <View style={[styles.imageContainer, ImageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPressProps={onStartNewGamer}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 2,
    borderColor: Color.primary800,
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
    fontFamily: "open-sans",
    color: Color.primary800,
  },
});
