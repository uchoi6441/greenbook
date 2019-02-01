import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './screens/Home';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default createAppContainer(RootStack);
