import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useFonts } from 'expo-font';
import { styles } from './style';

interface Quadra {
  id: string;
  name: string;
  distance: string;
}

interface Jogo {
  id: string;
  quadra: string;
  usuarios: string[];
  data: string;
  hora: string;
}

const Home = () => {
  const [fontsLoaded] = useFonts({
    'inter_28pt-Bold': require('../../../assets/fonts/Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const quadras: Quadra[] = [
    { id: '1', name: 'Quadra A', distance: '500m' },
    { id: '2', name: 'Quadra B', distance: '1km' },
    { id: '3', name: 'Quadra C', distance: '2km' },
  ];

  const jogosPopulares: Jogo[] = [
    {
      id: '1',
      quadra: 'Quadra A',
      usuarios: ['User1', 'User2', 'User3', 'User4', 'User5', 'User6'],
      data: '24/09/2024',
      hora: '14:00',
    },
    {
      id: '2',
      quadra: 'Quadra B',
      usuarios: ['User1', 'User2', 'User3'],
      data: '25/09/2024',
      hora: '15:00',
    },
  ];

  const renderQuadra = ({ item }: { item: Quadra }) => (
    <View style={styles.quadraContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <View style={styles.quadraInfo}>
        <Text style={styles.quadraName}>{item.name}</Text>
        <View style={styles.quadraLocation}>
          <Text style={styles.quadraDistance}>{item.distance}</Text>
          <Icon name="location-on" size={20} color="#FF6D00" />
        </View>
      </View>
    </View>
  );

  const renderJogo = ({ item }: { item: Jogo }) => {
    const usuariosExibidos = item.usuarios.slice(0, 5);
    const usuariosRestantes = item.usuarios.length - usuariosExibidos.length;

    return (
      <View style={styles.jogoContainer}>
        <View style={styles.jogoHeader}>
          <Text style={styles.jogoQuadra}>{item.quadra}</Text>
          <Icon name="more-vert" size={20} color="#FFFFFF" />
        </View>
        <View style={styles.jogoUsuarios}>
          {usuariosExibidos.map((usuario, index) => (
            <Icon key={index} name="person" size={20} color="#FFFFFF" />
          ))}
          {usuariosRestantes > 0 && (
            <Text style={styles.usuariosRestantes}>+{usuariosRestantes}</Text>
          )}
        </View>
        <View style={styles.jogoFooter}>
          <Text style={styles.jogoData}>{item.data} - {item.hora}</Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-arrow" size={10} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem vindo ao AirBall! Pronto para dominar a quadra?</Text>
      
      <View style={styles.header}>
        <Text style={styles.quadrasTitle}>Quadras</Text>
        <View style={styles.icons}>
          <Icon name="map" size={24} color="#FF6D00" />
          <Icon name="menu" size={24} color="#FF6D00" />
        </View>
      </View>

      <FlatList
        data={quadras}
        renderItem={renderQuadra}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Jogos Populares</Text>

      <FlatList
        data={jogosPopulares}
        renderItem={renderJogo}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;


