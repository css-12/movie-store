import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Novidade = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Lançamento</Text>
    </SafeAreaView>
  );
};

export default Novidade;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
