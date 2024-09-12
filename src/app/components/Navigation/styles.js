import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins', // Ensure this font is available in your project
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  selected: {
    color: '#FF6D00',
  },
  notSelected: {
    color: '#E0E0E0',
  },
});

export default styles;

