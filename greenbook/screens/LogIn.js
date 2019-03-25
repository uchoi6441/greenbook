import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';
import { Font } from 'expo';
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
      email: '',
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>trade</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.else }>roots</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: Dimensions.get('window').height / 100 * 7}}>
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
          <TextInput
            style={ this.state.fontLoaded ? styles.userInfoText : styles.else }
            placeholder="email"
            onChangeText={(email) => this.setState({email})}
          />
        </View>
        <View style={styles.userInfo}>
          <TextInput
            style={ this.state.fontLoaded ? styles.userInfoText : styles.else }
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height / 25}}>
          <Text style={ this.state.fontLoaded ? styles.forgot : styles.else }>forgot my password</Text>
        </View>
        <View style={styles.bodyFive}>
          <LogInButton
            font = { this.state.fontLoaded }
            text = { 'log in' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
            email = { this.state.email }
            password = { this.state.password }
          />
          <ChangePageButton
            font = { this.state.fontLoaded }
            text = { 'sign up' }
            navigation = { this.props.navigation }
            destination = { 'SignUp' }
          />
        </View>
        <View style={{flexDirection: 'row', height: Dimensions.get('window').height / 100 * 7}}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyFive: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height / 31,
    marginBottom: Dimensions.get('window').height / 100 * 5,
  },
  else: {
    fontSize: 44,
  },
  forgot: {
    fontSize: 15,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: Dimensions.get('window').height / 100 * 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  subheadingText: {
    fontSize: 70,
    marginTop: -16,
    fontFamily: 'libre-barcode',
  },
  userInfo: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: Dimensions.get('window').width / 100 * 10,
    flexWrap: 'wrap',
  },
  userInfoText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
    paddingRight: 5,
    paddingTop: Dimensions.get('window').height / 100 * 2,
  },
  vineImage: {
    marginLeft: -12,
  },
  vineImage2: {
    marginLeft: -12,
    transform: [{ rotate: '180deg'}],
  },
});
