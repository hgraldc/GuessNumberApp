import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tittle({ children }) {
  return <Text style={styles.tittle}>{children}</Text>
  
}

const styles = StyleSheet.create({
    tittle: {
      fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
        borderWidth: Platform.select({ios: 0 , android: 2}),
        borderColor: "white",
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})