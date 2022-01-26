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
import { series } from '../data/series';
import { seriest } from '../data/seriest';
import { seriesf } from '../data/seriesf';

const Serie = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Originais</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={series}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Série Selecionada', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Terror</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={seriest}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Série Selecionada', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.espaco} />}
        />

        <Text style={styles.texto}>Para Família</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={seriesf}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Série Selecionada', item.nome)}
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

export default Serie;

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
