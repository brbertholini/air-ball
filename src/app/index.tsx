import { View, Text, Image, Pressable,StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import OrangeButton from './components/OrangeButton/index';
import TransparentButton from './components/TransparentButton/index';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'inter_28pt-Bold': require('../assets/fonts/Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/images/center.png')}
          style={styles.centerImage}
        />

        <Text style={styles.presentationText}>
          Suba para a cesta, faça história: Transforme seu jogo com{' '}
          <Text style={styles.highlight}>AirBall!</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <OrangeButton title="Junte-se a nós" width={190} href="/screens/SignUp" />
        <TransparentButton title="Entrar" width={120} href="/screens/SignIn" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    logoContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    logo: {
      width: 52,
      height: 52,
      marginLeft: 29,
      marginTop: 60,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerImage: {
      width: 309,
      height: 309,
    },
    presentationText: {
      width: 350,
      height: 124,
      color: '#FFFFFF',
      fontSize: 25,
      fontFamily: 'inter_28pt-Bold'
    },
    highlight: {
      color: '#FF6D00',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

  });