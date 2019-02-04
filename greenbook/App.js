import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './screens/Home';
import { LogInScreen } from './screens/LogIn';

const RootStack = createStackNavigator({
  logIn: { screen: LogInScreen },
  Home: { screen: HomeScreen },
});

export default createAppContainer(RootStack);
