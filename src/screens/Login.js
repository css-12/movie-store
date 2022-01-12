import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cadastrar</Text>

      <Text style={styles.texto}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />

      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input} placeholder="Crie uma senha" />

      <Text style={styles.texto}>Confirme a senha</Text>
      <TextInput style={styles.input} placeholder="Confirme sua senha" />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    paddingHorizontal: 20,
    flex: 1,
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 50,
  },
  texto: {
    fontSize: 25,
  },
  input: {
    backgroundColor: '#E5E7EB',
    marginTop: 10,
    marginBottom: 25,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  botao: {
    backgroundColor: '#4B5563',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 70,
    marginVertical: 30,
  },
  botaoTexto: {
    color: 'white',
  },
});
