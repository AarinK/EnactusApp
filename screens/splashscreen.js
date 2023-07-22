import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.splashImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashScreenComponent;
