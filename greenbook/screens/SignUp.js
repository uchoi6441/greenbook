import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeOptions from './../components/HomeOptions';

export class SignUpScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      text: '',
      id: null,
      name: '',
      username: '',
      password: '',
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'gloria-hallelujah': require('./../assets/fonts/GloriaHallelujah.ttf'),
      'libre-barcode': require('./../assets/fonts/LibreBarcode128Text-Regular.ttf'),
      'source-code-pro': require('./../assets/fonts/SourceCodePro-Light.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>sign up</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style={ styles.enterBox }>
            <Text style={this.state.fontLoaded ? styles.enter : styles.justInCase }>name:</Text>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              onChangeText={(name) => this.setState({name})}
            />
          </View>
          <View style={ styles.enterBox }>
            <Text style={this.state.fontLoaded ? styles.enter : styles.justInCase }>username:</Text>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              onChangeText={(username) => this.setState({username})}
            />
          </View>
          <View style={ styles.enterBox }>
            <Text style={this.state.fontLoaded ? styles.enter : styles.justInCase }>password:</Text>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={ styles.bottomImages }>
            <Image
              source={require('./../assets/images/willow.png')}
              style={ styles.willowImage }
            />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: '10%' }}>
            <Text style={ this.state.fontLoaded ? styles.continue : styles.else }>continue</Text>
            <Text style={ this.state.fontLoaded? styles.back : styles.else }>back</Text>
          </View>
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
  body: {
    flexDirection: 'column',
    marginTop: '30%',
  },
  bottomImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  continue: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  enterBox: {
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').height / 10 * 4,
    marginBottom: 30,
    height: 50,
    flexDirection: 'row',
  },
  enter: {
    fontSize: 30,
    fontFamily: 'source-code-pro'
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
  willowImage: {
    width: 150,
    height: 150,
    marginTop: '30%',
    marginLeft: '10%',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
