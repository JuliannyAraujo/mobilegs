import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Seja Bem-Vindo!</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: '#007bff', borderWidth: 1, borderRadius: 20, paddingHorizontal: 15, marginBottom: 10 }}
        placeholder="Email"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: '#007bff', borderWidth: 1, borderRadius: 20, paddingHorizontal: 15, marginBottom: 10 }}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => alert('Login button pressed')} />
    </View>
  );
}
