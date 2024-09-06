import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    logoContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    logo: {
      width: 52,
      height: 52,
      marginLeft: 29,
      marginTop: 60,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerImage: {
      width: 309,
      height: 309,
    },
    presentationText: {
      width: 350,
      height: 124,
      color: '#FFFFFF',
      fontSize: 25,
      fontFamily: 'inter_28pt-Bold',
    },
    highlight: {
      color: '#FF6D00',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonLeft: {
      backgroundColor: '#FF6D00',
      padding: 10,
      borderRadius: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    buttonRight: {
      backgroundColor: '#121212',
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      color: '#FFFFFF',
    },
  });