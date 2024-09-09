import React from 'react';
import { Text,Pressable} from 'react-native';
import { styles } from './styles';
import { Link } from 'expo-router';

const OrangeButton = ({ title, width, href }) => {
  return (
    <Pressable style={[styles.buttonLeft, { width }]}>
      <Link href={href}>
        <Text style={styles.buttonText}>{title}</Text>
      </Link>
    </Pressable>
  );
};

export default OrangeButton;
