import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'inter_28pt-Bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  quadrasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'inter_28pt-Bold',
    color: '#E0E0E0',
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  quadraContainer: {
    marginRight: 16,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  quadraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  quadraName: {
    fontSize: 15,
    fontFamily: 'inter_28pt-Bold',
    color: '#E0E0E0',
  },
  quadraLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quadraDistance: {
    fontSize: 10,
    fontFamily: 'inter_28pt-Bold',
    marginRight: 4,
    color: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'inter_28pt-Bold',
    color: '#E0E0E0',
    marginVertical: 20,
  },
  jogoContainer: {
    backgroundColor: '#273B4A',
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    width: 200,
  },
  jogoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jogoQuadra: {
    fontSize: 20,
    fontFamily: 'inter_28pt-Bold',
    color: '#FFFFFF',
  },
  jogoUsuarios: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  usuariosRestantes: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  jogoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jogoData: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  playButton: {
    backgroundColor: '#FF6D00',
    borderRadius: 12,
    padding: 5,
  },
});

