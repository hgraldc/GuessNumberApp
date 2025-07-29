import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/Color";

const deviceWidth = Dimensions.get("window").width

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: deviceWidth < 380 ? 28 : 26,
    fontFamily: 'open-sans-bold'
  }
});
