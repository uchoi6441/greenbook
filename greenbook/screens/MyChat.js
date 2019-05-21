import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/587fcd5f-cf84-421b-9fe0-8935ac068fd6/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:587fcd5f-cf84-421b-9fe0-8935ac068fd6';
const CHATKIT_SECRET_KEY = '5d61aa3e-2d2e-46eb-9363-3f22ffa16743:2F0abjZuUWf9ZvukvGvQw2vSqOpdRUgbgzemQO5V9UE=';
const CHATKIT_ROOM_ID = '19411428';
const CHATKIT_USER_NAME = 'Urie Choi';

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
        <View style={styles.headingBufferTop}/>
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
        <View style={styles.bottomButton}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.back : styles.else }>back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  else: {
    fontSize: 44,
  },
  header: {
    height: Dimensions.get('window').height / 100 * 14,
    flexDirection: 'row',
    paddingLeft: Dimensions.get('window').width / 100 * 3.6,
    paddingRight: Dimensions.get('window').width / 100 * 3.6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  headingBufferTop: {
    height: Dimensions.get('window').height / 100 * 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageBody: {
    backgroundColor: '#C5CFC4',
    height: Dimensions.get('window').height / 100 * 61,
    marginBottom: Dimensions.get('window').height / 100 * 15,
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
