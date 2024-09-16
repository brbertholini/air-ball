import React from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';  // You forgot to import Ionicons
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Entypo name="location" size={24} color="#E0E0E0" />
        <Text style={styles.text}>Av. Águia de Haia</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="notifications" size={24} color="#E0E0E0" />
      </View>

    </View>
  );
};

export default Header;
