import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.logoText}>Sport Shoes</Text>
          <View style={styles.headerIcons}>
            <FontAwesome name="heart-o" size={24} color="black" style={styles.icon} />
            <FontAwesome name="shopping-cart" size={24} color="black" style={styles.icon} />
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Items"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Wallet balance and top-up */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Wallet balance</Text>
            <Text style={styles.balanceAmount}>Rp1.000.000</Text>
          </View>
          <View style={styles.topUpContainer}>
            <Text style={styles.balanceLabel}>Top up balance</Text>
            <TouchableOpacity style={styles.topUpButton}>
              <MaterialIcons name="payment" size={24} color="black" />
              <Text>Top up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banners */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: '../../assets/images/banner.png' }} // replace with your banner image URL
            style={styles.banner}
          />
        </View>

        {/* Shop by Category */}
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>FOOTWEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>BAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>APPAREL</Text>
          </TouchableOpacity>
        </View>

        {/* For You Section */}
        <Text style={styles.sectionTitle}>For You</Text>
        <View style={styles.productGrid}>
          <View style={styles.productItem}>
            <Image
              source={{ uri: '../../assets/images/pict.png' }} // replace with product image
              style={styles.productImage}
            />
            <Text>Air Legging Sport</Text>
            <Text style={styles.productCategory}>Apparel</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </View>

          <View style={styles.productItem}>
            <Image
              source={{ uri: '../../assets/images/450.png' }} // replace with product image
              style={styles.productImage}
            />
            <Text>Aero Sport Infinity Max</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </View>

          <View style={styles.productItem}>
            <Image
              source={{ uri: '../../assets/images/250.png' }} // replace with product image
              style={styles.productImage}
            />
            <Text>Sport Runner Blue Edition</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp250.000</Text>
          </View>

          <View style={styles.productItem}>
            <Image
              source={{ uri: '../../assets/images/350.png' }} // replace with product image
              style={styles.productImage}
            />
            <Text>Sport Bag</Text>
            <Text style={styles.productCategory}>Bag</Text>
            <Text style={styles.productPrice}>Rp350.000</Text>
          </View>
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
      {/* <View style={styles.bottomNav}>
        
        <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('notification')}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity> 
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingBottom: 100, // Extra space for scrolling past bottom navbar
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  balanceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topUpContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  productItem: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
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

export default HomeScreen;
