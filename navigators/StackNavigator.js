import React from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Wellcome from "../screens/Wellcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup"
import ForgotPassword from "../screens/ForgotPassword"
import ReEnterPassword from "../screens/ReEnterPassword"
import OneTimePassword from "../screens/OneTimePassword"
import FavoritesDish from '../screens/FavoritesDish'
import HomeScreen from "../screens/Home";
import FeedScreen from "../screens/Feed";
import MealDetails from '../screens/MealDetails';
import Cart from '../screens/Cart'
import CardInfo from '../screens/CardInfo'
import TermsAndCondition from '../screens/TermsAndCondition'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerRoot = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OnboardingScreen" 
      component={OnboardingScreen} options={{
          swipeEnabled: false,
          headerShown: false 
        }}/>
      <Drawer.Screen name='StackNavigator' component={StackNavigator} options={{
          swipeEnabled: false,
          headerShown: false 
        }} />
    </Drawer.Navigator>
  )
};


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wellcome" component={Wellcome}  />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ReEnterPassword" component={ReEnterPassword} />
      <Stack.Screen name="OneTimePassword" component={OneTimePassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="TermsandCondition" component={TermsAndCondition} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Favorites Dish" component={FavoritesDish} options={{ headerShown: false }} />
      <Stack.Screen name="MealDetails" component={MealDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="Card Info" component={CardInfo} options={{ headerShown: false }} />
      {/* <Stack.Screen name="DrawerRoot" component={DrawerRoot} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
};

export default DrawerRoot
