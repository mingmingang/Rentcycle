import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView, // TAMBAH INI
} from "react-native";

const { width, height } = Dimensions.get("window");

const logoImage = require("../../assets/logo.png");
const illustrationImage = require("../../assets/illustration.png");
const cloudImage = require("../../assets/cloud.png");
const cloudImage2 = require("../../assets/cloud2.png");

const OnBoarding = ({ navigation }) => { // TAMBAH navigation prop
  return (
    <SafeAreaView style={styles.safeArea}> // GANTI View jadi SafeAreaView
      <StatusBar barStyle="dark-content" backgroundColor="#74cec0" />
      <View style={styles.container}>
        <Image source={cloudImage2} style={styles.cloudLeft} />
        <Image source={cloudImage} style={styles.cloudRight} />
        <Image source={illustrationImage} style={styles.illustration} />

        <View style={styles.header}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.brandName}>RENTCYCLE</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Live Greener with Every Rental</Text>
          <Text style={styles.subtitle}>
            Reduce carbon footprint, cut down on clutter, and help the planet
            one rental at a time.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")} 
        >
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#74cec0",
  },
  container: {
    flex: 1,
    backgroundColor: "#74cec0",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  cloudLeft: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  cloudRight: {
    position: "absolute",
    top: 80,
    right: 30,
    width: 90,
    height: 55,
    resizeMode: "contain",
  },
  illustration: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
    marginBottom: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  brandName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  content: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "#74cec0",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnBoarding;