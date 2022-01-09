import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
