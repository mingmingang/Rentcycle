import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // GANTI INI

const { width } = Dimensions.get("window");

const images = {
  column1: [
    require("../../assets/img1.png"),
    require("../../assets/img2.png"),
    require("../../assets/img3.png"),
  ],
  column2: [
    require("../../assets/img4.png"),
    require("../../assets/img5.png"),
    require("../../assets/img6.png"),
  ],
  column3: [
    require("../../assets/img7.png"),
    require("../../assets/img8.png"),
    require("../../assets/img9.png"),
  ],
};

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent} // GANTI INI
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/logo-green.png")}
              style={styles.logo}
            />
            <Text style={styles.brandName}>RENTCYCLE</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.column}>
              {images.column1.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={[styles.gridImage, { height: 150 }]}
                />
              ))}
            </View>
            <View style={[styles.column, { marginTop: 40 }]}>
              {images.column2.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={[
                    styles.gridImage,
                    { height: index === 1 ? 120 : 180 },
                  ]}
                />
              ))}
            </View>
            <View style={styles.column}>
              {images.column3.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={[styles.gridImage, { height: 200 }]}
                />
              ))}
            </View>
          </View>

          <LinearGradient
            colors={["rgba(255, 255, 255, 0)", "#5dc2a1"]}
            style={styles.gradient}
          />

          <View style={styles.bottomContainer}>
            <Image
              source={require("../../assets/mini-cloud.png")}
              style={styles.cloudLeft}
            />
            <Image
              source={require("../../assets/mini-cloud-2.png")}
              style={styles.cloudRight}
            />

            <View style={styles.bottomContent}>
              <Text style={styles.title}>Welcome to Rentcycle</Text>
              <Text style={styles.subtitle}>
                Join the movement to reduce waste and embrace smarter,
                sustainable living through sharing.
              </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')} // TAMBAH NAVIGASI
              >
                <Text style={styles.loginButtonText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate('SignUp')} // TAMBAH NAVIGASI
              >
                <Text style={styles.signupButtonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: { // GANTI INI
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  brandName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E8B57",
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  gridImage: {
    width: width * 0.28,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 200,
    height: 100,
  },
  bottomContainer: {
    backgroundColor: "#5dc2a1",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
    marginTop: 20,
  },
  cloudLeft: {
    position: "absolute",
    top: -30,
    left: 20,
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
  cloudRight: {
    position: "absolute",
    top: -40,
    right: 30,
    width: 70,
    height: 45,
    resizeMode: "contain",
  },
  bottomContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#5dc2a1",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Welcome;