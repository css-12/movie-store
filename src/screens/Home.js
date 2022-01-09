import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Lançamento')}>
        <Text>Ir para Lançamentos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
