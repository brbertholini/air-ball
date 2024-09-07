import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useFonts } from 'expo-font';


const LoginPage = () => {
    const [fontsLoaded] = useFonts({
        'inter_28pt-Bold': require('../../../assets/fonts/Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>


      <View style={styles.logoContainer}>
      <Image
          source={require('../../../assets/images/logo.png')}
        />
      </View>


      <Text style={styles.welcomeText}>Bem vindo</Text>
      <Text style={styles.instructionText}>Registre-se para continuar</Text>

    <View style={styles.form}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput 
        style={styles.input}
        placeholder="teste@gmail.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

    <Text style={styles.label}>Senha</Text>
    <TextInput 
        style={styles.input}
        placeholder="*******"
        placeholderTextColor="#999"
        secureTextEntry= {true}
      />


      {/* Link de Esqueci minha senha */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botão de Continuar */}
      <Button title="Continuar" onPress={() => {}} />

      {/* Link de Registrar */}
      <Text style={styles.registerText}>
        Não tem uma conta? <Text style={styles.registerLink}>Registrar</Text>
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    color: '#FFF',
    fontSize: 24,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 24,
    marginLeft:48,
    marginTop:128,
    fontFamily: 'inter_28pt-Bold',
  },
  instructionText: {
    color: '#FFF',
    marginLeft:48,
    fontSize: 18,
    marginBottom: 20,
  },
  form:{
    marginLeft:48
  },
  label: {
    color: '#fff', // Texto branco
    marginBottom: 5,
  },

  input: {
    color: '#fff',
    borderBottomWidth: 1, 
    borderBottomColor: '#fff',
    paddingVertical: 5,
    maxWidth:296,
    marginBottom:20
  },
  forgotPassword: {
    color: '#BBB',
    marginTop:20,
    marginLeft:162
  },
  registerText: {
    color: '#FFF',
    marginTop: 20,
  },
  registerLink: {
    color: '#FF6D00',
  },
});

export default LoginPage;
