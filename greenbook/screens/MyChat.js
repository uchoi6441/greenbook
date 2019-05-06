import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/587fcd5f-cf84-421b-9fe0-8935ac068fd6/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:587fcd5f-cf84-421b-9fe0-8935ac068fd6';
const CHATKIT_ROOM_ID = '19411369';
const CHATKIT_USER_NAME = 'Dave';

export class MyChatScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      messages: [],
    };
  }

  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider,
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onReceive = data => {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage),
    }));
  };
  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: CHATKIT_ROOM_ID,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <Text style={this.state.fontLoaded ? styles.name : styles.else}>{CHATKIT_USER_NAME}</Text>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={styles.messageBody}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: CHATKIT_USER_NAME
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  else: {
    fontSize: 44,
  },
  header: {
    height: Dimensions.get('window').height / 100 * 14,
    flexDirection: 'row',
    paddingLeft: Dimensions.get('window').width / 100 * 3.6,
    paddingRight: Dimensions.get('window').width / 100 * 3.6,
  },
  messageBody: {
    backgroundColor: '#C5CFC4',
    height: Dimensions.get('window').height / 100 * 61,
  },
  name: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  vineImage: {
    transform: [{ rotate: '170deg'}],
  },
});
