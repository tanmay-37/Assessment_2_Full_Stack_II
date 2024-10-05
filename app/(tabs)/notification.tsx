import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const NotificationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NOTIFICATION</Text>
        <TouchableOpacity>
          <Text style={styles.markAsRead}>Mark as read</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Notifications */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.notificationItem}>
          <Text style={styles.dateText}>Today, 10:20</Text>
          <Text style={styles.title}>LIMITED-TIME PROMO - UP TO 50% OFF!</Text>
          <Text style={styles.description}>
            Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!
          </Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.dateText}>Today, 09:05</Text>
          <Text style={styles.title}>FLASH SALE ALERT - SAVE BIG TODAY!</Text>
          <Text style={styles.description}>
            Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!
          </Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.dateText}>Yesterday, 08:10</Text>
          <Text style={styles.title}>GOOD MORNING, RUNNER!</Text>
          <Text style={styles.description}>
            It’s time to step out and run. Give your best to your body today. Find comfort in every step.
          </Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.dateText}>July 13, 2023, 17:30</Text>
          <Text style={styles.title}>EXCLUSIVE DISCOUNT JUST FOR YOU</Text>
          <Text style={styles.description}>
            Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code "EXCLUSIVE15" at checkout.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('wishlist')}>
          <FontAwesome name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('notification')}>
        <Ionicons name="notifications-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  markAsRead: {
    color: 'orange',
    fontSize: 16,
  },
  scrollView: {
    padding: 15,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderColor: 'orange',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default NotificationScreen;
