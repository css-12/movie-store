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
import { filmes } from '../data/filmes';
import { filmesm } from '../data/filmesm';
import { filmesc } from '../data/filmesc';

const Novidade = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Originais</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Musicais</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmesm}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Comédias</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmesc}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
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

export default Novidade;

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
