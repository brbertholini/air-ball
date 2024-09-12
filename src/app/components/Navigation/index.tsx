import React, { useState } from 'react';
import { Text, Image, Button, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles'; // Adjust the path if needed

const Navigation = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handlePress = (item: string) => {
    setSelected(item);
  };

  const handleMouseEnter = (item: string) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const getItemStyle = (item: string) => {
    if (item === selected || item === hovered) {
      return styles.selected;
    }
    return styles.notSelected;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.navItem, getItemStyle('home')]}
        onPress={() => handlePress('home')}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={handleMouseLeave}
      >
        <Entypo name="home" size={24} style={styles.icon} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, getItemStyle('partidas')]}
        onPress={() => handlePress('partidas')}
        onMouseEnter={() => handleMouseEnter('partidas')}
        onMouseLeave={handleMouseLeave}
      >
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Partidas</Text>
      </TouchableOpacity>

      <View style={styles.navItem}>
        <Button title="+" onPress={() => { /* Your logic here */ }} color="#FF6D00" />
      </View>

      <TouchableOpacity
        style={[styles.navItem, getItemStyle('novidades')]}
        onPress={() => handlePress('novidades')}
        onMouseEnter={() => handleMouseEnter('novidades')}
        onMouseLeave={handleMouseLeave}
      >
        <Entypo name="newsletter" size={24} style={styles.icon} />
        <Text style={styles.text}>Novidades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, getItemStyle('menu')]}
        onPress={() => handlePress('menu')}
        onMouseEnter={() => handleMouseEnter('menu')}
        onMouseLeave={handleMouseLeave}
      >
        <Entypo name="menu" size={24} style={styles.icon} />
        <Text style={styles.text}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
