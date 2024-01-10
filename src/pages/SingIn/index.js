import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviarParaAPI = async () => {
    console.log('sssssssss');

    try {
      const response = await fetch('http://172.18.0.1:8080/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      console.log(response.data); // Aqui você pode tratar a resposta da API como necessário

      // Redirecionar para a próxima tela após o login
      navigation.navigate('Acessar');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Lógica para lidar com erros na requisição
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.containerHeader}>
        <Text style={styles.message}> Bem-Vindo(a) </Text>
        <Text style={styles.subtitle}>Faça login para acessar</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title} name="email">
          {' '}
          Email{' '}
        </Text>
        <TextInput
          placeholder="Digite um email ..."
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          name="senha"
          placeholder="Digite a sua senha ..."
          style={styles.input}
          secureTextEntry
          onChangeText={text => setSenha(text)}
        />

        <Button
          onPress={() => enviarParaAPI()}
          style={styles.buttonText}
          title="Acessar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: '600',
    color: '#01579B',
    fontFamily: 'Montserrat',
  },
  containerForm: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold',
    color: '#4DD0E1',
  },
  subtitle: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '400',
    color: '#26A69A',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: '#1A237E',
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
