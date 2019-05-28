import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { GiftedChat } from 'react-native-gifted-chat';
import * as Fire from './Fire';

export class ChatScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      messages: [],
    };
  }

  componentWillMount() {
    Fire.on()
  }

  componentWillUnmount() {
    Fire.off();
  }

  get user() {
    return {
      name: Fire.getName(),
      _id: Fire.getUid(),
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: user.name || 'Chat!',
  });

  onSend = (messages = []) => {
    this.setState({
      messages: GiftedChat.append(this.state.messages, messages)
    }, () => {
      console.log(this.state.messages)
      Fire.send(this.state.messages)
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <GiftedChat
        messages = { this.state.messages }
        font = { this.state.fontLoaded }
        navigation = { this.props.navigation }
        destination = { 'Home' }
        onSend={messages => { this.onSend(messages) }}
        user={ this.user }
      />
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
    marginTop: '30%',
  },
  else: {
    fontSize: 44,
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: Dimensions.get('window').height / 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  back: {
    fontSize: 15,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
