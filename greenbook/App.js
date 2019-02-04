import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LogInScreen } from './screens/LogIn';
import { HomeScreen } from './screens/Home';

const RootStack = createStackNavigator({
  LogIn: { screen: LogInScreen },
  Home: { screen: HomeScreen },
});

export default createAppContainer(RootStack);
