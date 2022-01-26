import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { curtas } from '../data/curtas';
import { curtasa } from '../data/curtasa';
import { curtasl } from '../data/curtasl';

const Curta = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Originais</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={curtas}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Curta Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Animados</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={curtasa}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Curta Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Live Action</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={curtasl}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Curta Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Curta;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  texto: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 15,
  },
  imagem: {
    width: 160,
    height: 250,
  },
  espaco: {
    width: 10,
  },
});
