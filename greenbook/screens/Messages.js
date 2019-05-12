import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Font } from 'expo';
import { getMessages } from './../services/message-actions';
import MessageOptions from './../components/MessageOptions';
import { FluidNavigator } from 'react-navigation-fluid-transitions';


export class MessagesScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      data: [],
    };
  }
  componentWillMount() {
    getMessages().then((result) => {
      this.setState({ data: result })
    })
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          backgroundColor: "#000000",
          alignSelf: 'center',
          width: Dimensions.get('window').width / 10 * 9,
          marginBottom: 10,
        }}
      />
    );
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: Dimensions.get('window').height / 25, marginLeft: Dimensions.get('window').width / 15}}>
          <TouchableOpacity
            onPress={() => {
              navigate("Home")
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.logOut : styles.else}>back</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>messages</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <FlatList
            data = { this.state.data }
            renderItem = {({ item }) => (
              <MessageOptions
                font = { this.state.fontLoaded }
                text = { item }
                navigation = { this.props.navigation }
                destination = { 'MyChat' }
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />

        </View>
        <View style={ styles.bottomButton }>
          <TouchableOpacity onPress={() =>
            navigate('Home')
            }
          >
            <Text style = { this.state.fontLoaded ? styles.home : styles.else}>home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
    marginTop: '30%',
    height: Dimensions.get('window').height / 2,
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
  home: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
