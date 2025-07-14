import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.yellow,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.yellow,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: Colors.red,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 99,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: Colors.mediumBlue,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
