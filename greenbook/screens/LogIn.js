import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import LogInButton from './../components/LogInButton';
import ChangePageButton from './../components/ChangePageButton'
import firebase from 'firebase';
import { generateUserKey, createUser } from './../services/user-actions';

export class LogInScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      text: '',
      id: null,
      username: '',
      password: '',
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'gloria-hallelujah': require('./../assets/fonts/GloriaHallelujah.ttf'),
      'libre-barcode': require('./../assets/fonts/LibreBarcode128Text-Regular.ttf'),
      'source-code-pro': require('./../assets/fonts/SourceCodePro-Light.ttf'),
      'barcode': require('./../assets/fonts/LibreBarcode128-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.headingBufferTop}/>
        <View style={styles.heading}>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>green</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.justInCase }>book</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: '10%'}}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={ this.state.fontLoaded ?  styles.userInfoText : styles.justInCase }>username:</Text>
          <TextInput
            style={ this.state.fontLoaded ? styles.userInfoText2 : styles.justInCase }
            onChangeText={(username) => this.setState({username})}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={ this.state.fontLoaded ?  styles.userInfoText : styles.justInCase }>password:</Text>
          <TextInput
            style={ this.state.fontLoaded ? styles.userInfoText2 : styles.justInCase }
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={styles.bodyFive}>
          <LogInButton
            font = { this.state.fontLoaded }
            text = { 'log in' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
            username = { this.state.username }
            password = { this.state.password }
          />
        <ChangePageButton
            font = { this.state.fontLoaded }
            text = { 'sign up' }
            navigation = { this.props.navigation }
            destination = { 'SignUp' }
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage2}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: '5%'}}>
          <Image
            source={require('./../assets/images/book.png')}
            style={styles.bookImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyFive: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  bookImage: {
    width: 125,
    height: 125,
  },
  heading: {
    height: '12%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: '8%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  justInCase: {
    fontSize: 44,
  },
  subheadingText: {
    fontSize: 70,
    marginTop: -16,
    fontFamily: 'libre-barcode',
  },
  userInfo: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: '10%',
    flexWrap: 'wrap',
  },
  userInfoText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
    paddingRight: 5,
    paddingTop: '7%',
  },
  userInfoText2: {
    fontSize: 20,
    fontFamily: 'source-code-pro',
    paddingTop: '10%',
    alignItems: 'center',
  },
  vineImage: {
    marginLeft: -12,
  },
  vineImage2: {
    marginLeft: -12,
    transform: [{ rotate: '180deg'}],
  },
});
