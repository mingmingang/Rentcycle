// App.js - ALTERNATIF: Gunakan regular stack
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './page/Splash/Splash';
import OnBoarding from './page/OnBoarding/OnBoarding';
import Welcome from './page/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding'); 
    }, 3000);
  }, [navigation]);

  return <Splash />; 
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;