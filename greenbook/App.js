import React from 'react';
import * as firebaseConfig from './services/firebase-config';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { LogInScreen } from './screens/LogIn';
import { HomeScreen } from './screens/Home';
import { SignUpScreen } from './screens/SignUp';
import { CongratsScreen } from './screens/Congrats';
import { SettingsScreen } from './screens/Settings';
import { AboutScreen } from './screens/About';
import { SummaryScreen } from './screens/Summary';
import { MakePostingScreen } from './screens/MakePosting';
import { MyPostingsScreen } from './screens/MyPostings';
import { PostingSummaryScreen } from './screens/PostingSummary';
import { Tutorial0Screen } from './screens/Tutorial0';
import { Tutorial1Screen } from './screens/Tutorial1';
import { Tutorial2Screen } from './screens/Tutorial2';
import { Tutorial3Screen } from './screens/Tutorial3';
import { Tutorial4Screen } from './screens/Tutorial4';
import { BulletinBoardScreen } from './screens/BulletinBoard';
import { BulletinBoardNoneFoundScreen } from './screens/BulletinBoardNoneFound';
import { NewTagScreen } from './screens/NewTag';
import { MyTagsScreen } from './screens/MyTags';
import { ChatScreen } from './screens/Chat';
import { MessagesScreen } from './screens/Messages';

const RootStack = FluidNavigator({
  LogIn: { screen: LogInScreen },
  About: { screen: AboutScreen },
  Home: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Congrats: { screen: CongratsScreen },
  Settings: { screen: SettingsScreen },
  Summary: { screen: SummaryScreen },
  PostingSummary: { screen: PostingSummaryScreen },
  MakePosting: { screen: MakePostingScreen },
  MyPostings: { screen: MyPostingsScreen },
  Tutorial0: { screen: Tutorial0Screen },
  Tutorial1: { screen: Tutorial1Screen },
  Tutorial2: { screen: Tutorial2Screen },
  Tutorial3: { screen: Tutorial3Screen },
  Tutorial4: { screen: Tutorial4Screen },
  BulletinBoard: { screen: BulletinBoardScreen },
  BulletinBoardNoneFound: { screen: BulletinBoardNoneFoundScreen },
  MyTags: { screen: MyTagsScreen },
  NewTag: { screen: NewTagScreen },
  Chat: { screen: ChatScreen },
  Messages: { screen: MessagesScreen },
});

export default createAppContainer(RootStack);
