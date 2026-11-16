import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const announcements = [
  {
    title: 'Welcome Week Schedule Released',
    detail: 'Orientation sessions, campus tours, and student services are now available for registration.',
    time: 'Today · 9:30 AM',
  },
  {
    title: 'Library Study Lounge Extended',
    detail: 'The main library annex will remain open until 11:00 PM this week to support exam preparation.',
    time: 'Today · 8:15 AM',
  },
  {
    title: 'Student Leadership Applications Open',
    detail: 'Applications are now being accepted for club leadership and peer mentor roles for the next semester.',
    time: 'Yesterday · 4:20 PM',
  },
  {
    title: 'Career Services Workshop',
    detail: 'Attend a live resume review and mock interview session on Thursday afternoon in the student center.',
    time: 'Mon · 2:00 PM',
  },
];

export default function AnnouncementsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Link href="/" asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </Pressable>
        </Link>

        <Text style={styles.eyebrow}>Announcements</Text>
        <Text style={styles.title}>Campus updates</Text>

        <View style={styles.feedList}>
          {announcements.map((item) => (
            <View key={item.title} style={styles.announcementCard}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <Text style={styles.announcementDetail}>{item.detail}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 32,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 18,
  },
  backButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '700',
  },
  eyebrow: {
    fontSize: 12,
    color: '#2563eb',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 20,
  },
  feedList: {
    gap: 14,
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 18,
  },
  time: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  announcementDetail: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
  },
});
