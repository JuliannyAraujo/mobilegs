// InitialScreen.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/oceano.png')} style={styles.icon} />
      <Text style={styles.text}>Easy Tech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100, // ajuste conforme necessário
    height: 100, // ajuste conforme necessário
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
