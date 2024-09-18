import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import useCustomFonts from '../../../hooks/useCustomFonts'
import Input from '../../components/Input/index';
import TransparentButton from '../../components/TransparentButton/index';
import { styles } from './styles';
import { Link } from 'expo-router';

const Signin = () => {
  
  const fontsLoaded = useCustomFonts();
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/images/logo.png')} />
      </View>

      <Text style={styles.welcomeText}>Bem vindo de volta,</Text>
      <Text style={styles.instructionText}>Entre para continuar</Text>

      <Input label="E-mail" keyboardType="email-address" isPassword={false} />
      <Input label="Senha" keyboardType="default" isPassword={true} />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TransparentButton title="Continuar" width={265} href="" />
      </View>

      <Text style={styles.registerText}>
        Não tem uma conta?{' '}
        <Link href='/screens/SignUp' style={styles.registerLink}>
          Registrar
        </Link>
      </Text>
    </View>
  );
};

export default Signin;
