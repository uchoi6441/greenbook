import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

export class MyChatScreen extends React.Component {
  render() {
	    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
        </View>
	    );
	  }
}
