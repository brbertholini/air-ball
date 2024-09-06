import { View, Text, Image, Pressable} from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './styles'; 

export default function Index() {
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
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require('../../../assets/images/center.png')}
          style={styles.centerImage}
        />

        <Text style={styles.presentationText}>
          Suba para a cesta, faça história: Transforme seu jogo com{' '}
          <Text style={styles.highlight}>AirBall!</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonLeft}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Junte-se a nós</Text>
        </Pressable>

        <Pressable
          style={styles.buttonRight}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Entre</Text>
        </Pressable>
      </View>
    </View>
  );
}