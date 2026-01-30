import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>A</Text>
      <Text style={styles.green}>B</Text>
      <Text style={styles.blue}>C</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  red: {
    color: 'red',
    fontSize: 32,
  },
  green: {
    color: 'green',
    fontSize: 32,
  },
  blue: {
    color: 'blue',
    fontSize: 32,
  },
});