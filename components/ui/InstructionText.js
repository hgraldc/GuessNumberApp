import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/Color";

export default function InstructionText({ children, styleProps }) {
  return <Text style={[styles.instructorText, styleProps]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructorText: {
    color: Color.accent500,
    fontSize: 24,
  },
});
