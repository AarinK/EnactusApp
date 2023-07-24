import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreenComponent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, 
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcomebg.png')} style={styles.BgImage} />
      <Image source={require('../assets/flower1.png')} style={styles.BigImage1} resizeMode="contain" />
      <Image source={require('../assets/flower2.png')} style={styles.SmallImage1} resizeMode="contain" />
      <Image source={require('../assets/flower5.png')} style={styles.SmallImage2} resizeMode="contain" />
      <Image source={require('../assets/flower3.png')} style={styles.SmallImage3} resizeMode="contain" />
      <Image source={require('../assets/flower4.png')} style={styles.BigImage2} resizeMode="contain" />
      <Image source={require('../assets/flower6.png')} style={styles.BigImage3} resizeMode="contain" />
      <Animated.Image
        source={require('../assets/hellotext.png')}
        style={[styles.Text, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54412E',
  },
  BgImage: {
    width: '100%',
    height: '100%',
  },
  SmallImage1: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '82%',
    left: '52%',
  },
  SmallImage2: {
    width: 45,
    height: 60,
    position: 'absolute',
    top: '5%',
    left: '26%',
  },
  SmallImage3: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '10%',
    left: '71%',
  },
  BigImage2: {
    width: 70,
    height: 100,
    position: 'absolute',
    top: '25%',
    left: '0%',
  },
  BigImage1: {
    width: 70,
    height: 100,
    position: 'absolute',
    top: '89%',
    left: '85%',
  },
  BigImage3: {
    width: 70,
    height: 130,
    position: 'absolute',
    top: '88%',
    left: '0%',
  },
  Text: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: '32%',
    left: '35%',
  },
});

export default SplashScreenComponent;
