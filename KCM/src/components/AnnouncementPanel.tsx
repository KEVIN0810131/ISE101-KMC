import { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AnnouncementCard from './AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: 'Academic' | 'Events' | 'Notice';
  read: boolean;
};

const initialAnnouncements: AnnouncementItem[] = [
  { id: 'ANN-001', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'ANN-002', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'ANN-003', title: 'Campus Clean-up Drive', category: 'Notice', read: true },
  { id: 'ANN-004', title: 'Student Leadership Applications Open', category: 'Notice', read: false },
  { id: 'ANN-005', title: 'Library Hours Extended for Midterms', category: 'Academic', read: true },
  { id: 'ANN-006', title: 'Community Wellness Day Registration', category: 'Events', read: false },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(initialAnnouncements);
  const [status, setStatus] = useState<'Checking' | 'Ready'>('Checking');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Ready');
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const unreadCount = useMemo(
    () => announcements.filter((announcement) => !announcement.read).length,
    [announcements],
  );

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus announcements</Text>
      <Text style={styles.counter}>Unread announcements: {unreadCount}</Text>
      <Text style={styles.statusText}>Feed status: {status}</Text>

      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AnnouncementCard
            title={item.title}
            category={item.category}
            read={item.read}
            onMarkRead={() => handleMarkRead(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  counter: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 12,
  },
  list: {
    paddingBottom: 8,
  },
});
