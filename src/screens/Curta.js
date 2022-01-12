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

const Curta = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Curtas</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={curtas}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Cartaz Selecionado', item.nome)}
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
