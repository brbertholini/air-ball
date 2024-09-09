import { Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Link } from 'expo-router';

const TransparentButton = ({ title, width, href }) => {
  return (
    <Pressable style={[styles.buttonRight, { width }]}>
      <Link href={href}>
        <Text style={styles.buttonText}>{title}</Text>
      </Link>
    </Pressable>
  );
};

export default TransparentButton;