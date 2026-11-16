import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ActionButton from '../components/ActionButton';
import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';
import type { Announcement } from '../types/announcement';
import { getUnreadAnnouncements } from '../services/announcementUtils';

const quickStats = [
  { label: 'Upcoming events', value: '6' },
  { label: 'Announcements', value: '12' },
  { label: 'Clubs', value: '18' },
];

const spotlightCards = [
  { title: 'Campus orientation', detail: 'New student check-in and welcome week schedule', tag: 'Today' },
  { title: 'Volunteer fair', detail: 'Meet clubs, services, and student leaders', tag: 'This week' },
  { title: 'Study lounge hours', detail: 'Extended quiet hours at the library annex', tag: 'Updated' },
];

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule', category: 'Notice', read: false },
  { id: 'a4', title: 'Career workshop', category: 'Events', read: true },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 380;
  const unreadAnnouncements = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <SectionHeading
          eyebrow="Campus Connect"
          title="Welcome back, Jordan."
          subtitle="Everything you need for campus life in one place."
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80' }}
          style={[styles.banner, compact && styles.bannerCompact]}
          accessibilityLabel="Campus banner"
        />

        <View style={styles.infoPanel}>
          <Text style={styles.infoLabel}>Unread announcements</Text>
          <Text style={styles.infoValue}>{unreadAnnouncements.length}</Text>
          <Text style={styles.infoHint}>Latest student updates</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today at a glance</Text>
          <Link href="/announcements" asChild>
            <Pressable>
              <Text style={styles.linkText}>View all</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.cardList}>
          {spotlightCards.map((card) => (
            <View key={card.title} style={styles.featureCard}>
              <Text style={styles.featureTag}>{card.tag}</Text>
              <Text style={styles.featureTitle}>{card.title}</Text>
              <Text style={styles.featureDetail}>{card.detail}</Text>
            </View>
          ))}
        </View>

        <AnnouncementPanel />

        <Link href="/announcements" asChild>
          <ActionButton label="View all announcements" onPress={() => undefined} />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F3F7FF',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 18,
    paddingTop: 52,
    paddingBottom: 40,
  },
  banner: {
    width: '100%',
    height: 170,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 18,
  },
  bannerCompact: {
    height: 140,
  },
  infoPanel: {
    backgroundColor: '#dbeafe',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    color: '#1d4ed8',
    fontWeight: '700',
    marginBottom: 6,
  },
  infoValue: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0f172a',
  },
  infoHint: {
    fontSize: 13,
    color: '#1e3a8a',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  linkText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 14,
  },
  cardList: {
    gap: 12,
    marginBottom: 18,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#dfe8ff',
  },
  featureTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontWeight: '700',
    fontSize: 11,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  featureDetail: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
