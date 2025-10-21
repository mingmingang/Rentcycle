import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const logoImage = require('../../assets/logo.png');

const Splash = () => {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#5fa782" />
      <View style={styles.container}>
        {/* Lingkaran dekoratif di background */}
        <View style={[styles.circle, styles.circleOne]} />
        <View style={[styles.circle, styles.circleTwo]} />
        <View style={[styles.circle, styles.circleThree]} />

        {/* Konten Utama */}
        <View style={styles.contentContainer}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.title}>RENTCYCLE</Text>
        </View>

        {/* Tagline di bagian bawah */}
        <Text style={styles.tagline}>
          “Redefining Consumption Through Technology.”
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#5fa782',
  },
  container: {
    flex: 1,
    backgroundColor: '#5fa782', // Warna hijau utama
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden', // Menyembunyikan bagian lingkaran yang keluar dari layar
  },
  // Style untuk lingkaran dekoratif
  circle: {
    position: 'absolute',
    backgroundColor: '#549775', // Warna hijau lebih gelap dan subtle
    borderRadius: 500, // Nilai besar untuk memastikan bentuknya selalu lingkaran
  },
  circleOne: {
    width: 400,
    height: 400,
    top: -100,
    left: -150,
  },
  circleTwo: {
    width: 300,
    height: 300,
    bottom: -150,
    right: -120,
  },
  circleThree: {
    width: 200,
    height: 200,
    bottom: -50,
    right: -100,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  tagline: {
    position: 'absolute',
    bottom: 50,
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Splash;