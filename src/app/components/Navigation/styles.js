import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    position: 'absolute',  // Mantém a barra fixa
    bottom: 0,  // Posiciona na parte inferior
    left: 0,  // Alinha à esquerda
    right: 0,  // Alinha à direita
    width: '100%',  // Garante que a barra ocupe 100% da largura
    borderTopWidth: 1,  // Adiciona uma linha na parte superior para separação
    borderTopColor: '#E0E0E0',  // Cor da linha de separação
  },
  navItem: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins',
    color: '#E0E0E0', // Cor do texto padrão, será atualizada dinamicamente
  },
  logo: {
    width: 24,
    height: 24,
  },
});

