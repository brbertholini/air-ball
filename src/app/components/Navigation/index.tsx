import React, { useState } from 'react';
import { Text, Image, Button, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles'; // Certifique-se de que o caminho está correto

const Navigation = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handlePress = (item: string) => {
    setSelected(item);
  };

  // Function to determine style based on selection
  const getIconColor = (item: string) => {
    return item === selected ? '#FF6D00' : '#E0E0E0'; // Orange if selected, gray if not
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress('home')}
      >
        <Entypo name="home" size={24} color={getIconColor('home')} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress('partidas')}
      >
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Partidas</Text>
      </TouchableOpacity>

      <View style={styles.navItem}>
        {/* Botão permanece sempre com a cor laranja #FF6D00 */}
        <Button title="+" onPress={() => { /* Sua lógica aqui */ }} color="#FF6D00" />
      </View>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress('novidades')}
      >
        <Entypo name="newsletter" size={24} color={getIconColor('novidades')} />
        <Text style={styles.text}>Novidades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress('menu')}
      >
        <Entypo name="menu" size={24} color={getIconColor('menu')} />
        <Text style={styles.text}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;