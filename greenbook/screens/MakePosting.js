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
      isbn: '',
    };
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>make a posting</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style={ styles.greyBar }>
            <Text style={ this.state.fontLoaded ? styles.greyBarText : styles.else }>providing the ISBN code will help other students find your book!</Text>
          </View>
          <View style={styles.postingView}>
            <View style={{flexDirection:'row'}}>
              <Text style={ this.state.fontLoaded ? styles.isbn : styles.else }>ISBN:</Text>
              <View style={{backgroundColor: '#EAEFEA', borderRadius: 20, width: '70%', alignItems: 'center'}}>
                <TextInput
                  style={ this.state.fontLoaded ? styles.isbnText : styles.justInCase }
                  onChangeText={(isbn) => this.setState({isbn})}
                />
              </View>
            </View>
            <View style={{borderBottomWidth: 2, width: '90%', alignSelf: 'center'}}/>
            <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
              <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>department:</Text>
                <View style={{}}>

                </View>
            </View>
            <Text style={this.state.fontLoaded ? styles.optional : style.else}>(optional)</Text>
            <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
              <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>course number:</Text>
              <View style={{backgroundColor: '#EAEFEA', borderRadius: 20}}>

              </View>
              <Text style={this.state.fontLoaded ? styles.optional : style.else}>(optional)</Text>
            </View>
            <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
              <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>professor:</Text>
              <View style={{backgroundColor: '#EAEFEA', borderRadius: 20}}>

              </View>
            </View>
            <Text style={this.state.fontLoaded ? styles.optional : style.else}>(optional)</Text>
          </View>
        </View>
        <View style={ styles.bottomButtons }>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.bottomButtonsText : styles.else }>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.bottomButtonsText : styles.else }>post</Text>
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
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottomButtonsText: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  bottomImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  courseProf: {
    fontSize: 25,
    fontFamily: 'source-code-pro',
    marginLeft: '1%',
  },
  else: {
    fontSize: 44,
  },
  greyBar: {
    backgroundColor: '#A8A8A8',
    height: 50,
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  greyBarText: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
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
  isbn: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
    marginLeft: '1%',
  },
  isbnText: {
    fontSize: 20,
    fontFamily: 'source-code-pro',
  },
  optional: {
    fontSize: 20,
    fontFamily: 'source-code-pro',
    marginLeft: '1%',
  },
  postingView: {
    paddingTop: Dimensions.get('window').width / 12,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    width: Dimensions.get('window').width / 10 * 9,
    marginBottom: '10%',
    marginTop: '10%',
    height: Dimensions.get('window').height / 10 * 4,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
  wellImage: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
});
