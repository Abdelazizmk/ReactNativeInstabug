import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button, Pressable } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/CreativeLogo.png')} />
        <Text style={styles.welcomeText}>Welcome to Creative Design</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.loginHeader}>Connect with:</Text>
        <Pressable
          style={styles.emailButton}
          onPress={() => console.log("Email pressed")}
        >
          <Text>Email</Text>
        </Pressable>
        <Pressable
          style={styles.otherButton}
          onPress={() => console.log("Other pressed")}
        >
          <Text>Other</Text>
        </Pressable>
        <Text style={styles.altLogin}>or using Mobile Phone</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FCFCFC',
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  welcomeText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 90,
    gap: 20,
    alignItems: 'center',
  },
  loginHeader: {
    fontSize: 9,
  },
  emailButton: {
    borderWidth: 2,
    backgroundColor: "#766bb5",
    paddingVertical: 5,
    paddingHorizontal: 80,
    borderRadius: 20,
    borderColor: "#766bb5",
  },
  otherButton: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  altLogin: {
    fontSize: 8,
  },
});

export default WelcomeScreen;