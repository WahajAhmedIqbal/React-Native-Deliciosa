/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
// navigaion
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';



function App(): JSX.Element {

  useEffect(() => {
    // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};


export default App;
