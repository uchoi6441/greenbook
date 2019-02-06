import React from 'react';
import * as firebaseConfig from './services/firebase-config';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LogInScreen } from './screens/LogIn';
import { HomeScreen } from './screens/Home';
import { SignUpScreen } from './screens/SignUp';

const RootStack = createStackNavigator({
  LogIn: { screen: LogInScreen },
  Home: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
});

export default createAppContainer(RootStack);
