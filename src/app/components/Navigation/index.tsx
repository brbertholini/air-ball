import React from 'react';
import { Text,Image,Button,View} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { styles } from './styles';
import { Link } from 'expo-router';

const Navigation = ({}) => {
    return (
      <>
        <View styles={styles.container}>      {/* Container row para o navigation*/}
            <View> {/* Link Home para o navigation*/}
                <Entypo name="home"/>
                <Text>Home</Text>
            </View> 
            <View> {/* Link Partidas para o navigation*/}
                <Image source={require('../../../assets/images/logo.png')} />
                <Text>Partidas</Text>
            </View>
            <View> {/* Botão Criar Quadras para o navigation*/}
                <Button>+</Button>
            </View>
            <View> {/* Link Novidades para o navigation*/}
                <Entypo name="newsletter"/>
                <Text>Novidades</Text>
            </View>
            <View> {/* Link Menu  para o navigation*/}
                <Entypo name="menu" />
                <Text>Menu</Text>
            </View>
        </View>
      </>
    );
  };