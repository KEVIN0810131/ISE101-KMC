import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [isReviewed, setIsReviewed] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="small" style={styles.headerLabel}>
          ISE101 • WEEK 2 LAB
        </ThemedText>

        <ThemedText type="subtitle" style={styles.title}>
          Environment Inspector
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText type="smallBold" style={styles.cardTitle}>
            Toolchain overview
          </ThemedText>
          <ThemedText style={styles.listItem}>Node.js: runs the JavaScript toolchain.</ThemedText>
          <ThemedText style={styles.listItem}>npm: installs packages and launches scripts.</ThemedText>
          <ThemedText style={styles.listItem}>Expo: builds and runs the mobile app.</ThemedText>
          <ThemedText style={styles.listItem}>VS Code: edits project files and settings.</ThemedText>
          <ThemedText style={styles.listItem}>Git: tracks versions and project history.</ThemedText>
          <ThemedText style={styles.listItem}>GitHub: stores and shares the repository.</ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText type="smallBold" style={styles.cardTitle}>
            Configuration map
          </ThemedText>
          <ThemedText style={styles.cardText}>
            Configuration defines app metadata, source contains the app logic, assets store images and icons,
            and dependencies add the libraries that make the project work.
          </ThemedText>
        </ThemedView>

        <Pressable
          onPress={() => setIsReviewed((current) => !current)}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <ThemedText style={styles.buttonText}>{isReviewed ? 'Reviewed' : 'Mark as reviewed'}</ThemedText>
        </Pressable>

        <ThemedText style={styles.statusText}>
          {isReviewed
            ? 'Review complete: the environment has been checked.'
            : 'Not reviewed yet: confirm the setup before moving on.'}
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    gap: 16,
  },
  headerLabel: {
    textAlign: 'center',
    letterSpacing: 1,
    opacity: 0.8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
  },
  card: {
    borderRadius: 18,
    padding: 18,
    gap: 8,
  },
  cardTitle: {
    marginBottom: 4,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 200,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
  },
});
