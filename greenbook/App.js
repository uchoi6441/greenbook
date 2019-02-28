import React from 'react';
import * as firebaseConfig from './services/firebase-config';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LogInScreen } from './screens/LogIn';
import { HomeScreen } from './screens/Home';
import { SignUpScreen } from './screens/SignUp';
import { CongratsScreen } from './screens/Congrats';
import { SettingsScreen } from './screens/Settings';
import { AboutScreen } from './screens/About';
import { SummaryScreen } from './screens/Summary';
import { MakePostingScreen } from './screens/MakePosting';
import { MyPostingsScreen } from './screens/MyPostings';
<<<<<<< HEAD
=======
import { Tutorial1Screen } from './screens/Tutorial1';
import { Tutorial2Screen } from './screens/Tutorial2';
import { Tutorial3Screen } from './screens/Tutorial3';
>>>>>>> d7fc6ff7ac2dc9420c263e39e6a652969f83155d

const RootStack = createStackNavigator({
  LogIn: { screen: LogInScreen },
  About: { screen: AboutScreen },
  Home: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Congrats: { screen: CongratsScreen },
  Settings: { screen: SettingsScreen },
  Summary: { screen: SummaryScreen },
  MakePosting: { screen: MakePostingScreen },
  MyPostings: { screen: MyPostingsScreen },
<<<<<<< HEAD
=======
  Tutorial1: { screen: Tutorial1Screen },
  Tutorial2: { screen: Tutorial2Screen },
  Tutorial3: { screen: Tutorial3Screen },
>>>>>>> d7fc6ff7ac2dc9420c263e39e6a652969f83155d
});

export default createAppContainer(RootStack);
