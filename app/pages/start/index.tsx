import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useFonts } from 'expo-font';


export default function Index() {

  const [fontsLoaded] = useFonts({
    'inter_28pt-Bold': require('../../../assets/fonts/Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Loading font, so return null
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      {/* Logo do app no canto superior esquerdo */}
      <View style={{ position: "absolute", top: 10, left: 10 }}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 52, height: 52, marginLeft: 29, marginTop: 74 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/images/center.png")}
          style={{ width: 309, height: 309 }}
        />
        <Text style={styles.presentationText}>
          Suba para a cesta, faça história: Transforme seu jogo com{" "}
          <Text style={styles.highlight}>AirBall!</Text>
        </Text>
      </View>

      {/* Botões na parte inferior */}
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={styles.buttonLeft}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Junte-se a nós</Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Entre</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  presentationText: {
    width: 350,
    height: 124,
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily:'inter_28pt-Bold'
  },
  highlight: {
    color: "#FF6D00",
  },
  buttonLeft: {
    backgroundColor: "#FF6D00",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  rightButton: {
    backgroundColor: "#121212", // Fundo transparente
    borderWidth: 1, // Largura da borda
    borderColor: "#FFFFFF", // Cor da borda branca
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color:"#FFFFFF"
  }
});
