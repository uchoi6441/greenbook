import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class MakePostingScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
    };
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>make a posting</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style={ styles.greyBar }>

          </View>
        </View>
        <View style={ styles.bottomButtons }>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.back : styles.else }>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.back : styles.else }>post</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.bottomImage }>
          <Image source = { require('./../assets/images/well.png') } style = { styles.wellImage }/>
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
  },
  bottomButtons: {
    flexDirection: 'row',
  },
  bottomImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  greyBar: {
    backgroundColor: '#A8A8A8',
    height: 50,
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: '8%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  else: {
    fontSize: 44,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
  wellImage: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
});
