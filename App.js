import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>Campus Connect</Text>
      <Text style={styles.title}>One campus. Connected students.</Text>
      <Text style={styles.subtitle}>
        Welcome to the Week 1 project foundation for a smarter, more connected campus experience.
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  kicker: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F6FED',
    marginBottom: 12,
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B2A41',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5C76',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
  },
});
