import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import SplashScreenComponent from './screens/splashscreen';
import Dashboard from './screens/dashboard';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeAnimSplash] = useState(new Animated.Value(1));
  const [delayOver, setDelayOver] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setDelayOver(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (delayOver) {
      Animated.timing(fadeAnimSplash, {
        toValue: 0,
        duration: 1000, 
        useNativeDriver: true,
        easing: Easing.ease,
      }).start(() => {
        setShowSplash(false);
      });
    }
  }, [delayOver]);

  return (
    <>
      {showSplash ? (
        <Animated.View style={{ flex: 1, opacity: fadeAnimSplash }}>
          <SplashScreenComponent />
        </Animated.View>
      ) : (
        <Animated.View style={{ flex: 1, opacity: 1 }}>
          <Dashboard />
        </Animated.View>
      )}
    </>
  );
};

export default App;
