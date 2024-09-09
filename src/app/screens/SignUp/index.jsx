import { View, Text,Image } from 'react-native';
import { useFonts } from 'expo-font';
import Input from '../../components/Input/index';
import OrangeButton from '../../components/OrangeButton/index';
import { styles } from './styles';
import { Link } from 'expo-router';

const SignUp = () => {
    const [fontsLoaded] = useFonts({
      'inter_28pt-Bold': require('../../../assets/fonts/Bold.ttf'),
      'inter_28pt-SemiBold': require('../../../assets/fonts/SemiBold.ttf'),
      'inter_28pt-Regular': require('../../../assets/fonts/Regular.ttf'),
    });
  
    if (!fontsLoaded) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/logo.png')} />
        </View>
  
        <Text style={styles.welcomeText}>Bem vindo</Text>
        <Text style={styles.instructionText}>Registre-se para continuar</Text>
  
        <Input label="Nome Completo" keyboardType="alphabet" isPassword={false} />
        <Input label="E-mail" keyboardType="email-address" isPassword={false} />
        <Input label="Senha" keyboardType="default" isPassword={true} />
        <Input label="Confirme sua senha" keyboardType="default" isPassword={true} />
  
        <View style={styles.buttonContainer}>
          <OrangeButton title="Crie sua conta" width={265} href="/screens/SignIn" />
        </View>
  
        <Text style={styles.SigninText}>
          Já tem uma conta?{' '}
          <Link href="/screens/SignIn" style={styles.SigninLink}>
            Entrar
          </Link>
        </Text>
      </View>
    );
  };
  
  export default SignUp;