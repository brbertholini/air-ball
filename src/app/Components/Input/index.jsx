import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const Input = ({ label, keyboardType, isPassword }) => {

  let [fontsLoaded] = useFonts({
    'inter_28pt-Bold': require('../../../assets/fonts/Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.form}>
      <Text style={styles.label}>{label}</Text>
        <TextInput 
          style={styles.input}
          placeholder={label}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
        />
    </View>
  );
};

export default Input;