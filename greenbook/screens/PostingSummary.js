import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ListItem } from 'react-native';
import { Font } from 'expo';
import { getPosting } from './../services/posting-actions'
import MyPostingsButton from './../components/MyPostingsButton'
import { FluidNavigator } from 'react-navigation-fluid-transitions';


export class PostingSummaryScreen extends React.Component {
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>summary</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style = { styles.borderBox }>
            <Text style={ this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
          <View style = {{ height: '92%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style = { styles.button } >
                <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>
                  {this.props.navigation.state.params.title}
                </Text>
                <Text style = { this.state.fontLoaded ? styles.info : styles.infoElse }>
                  isbn: {this.props.navigation.state.params.isbn}
                </Text>
                <Text style = { this.state.fontLoaded ? styles.info : styles.infoElse }>
                  course: {this.props.navigation.state.params.course}
                </Text>
                <Text style = { this.state.fontLoaded ? styles.info : styles.infoElse }>
                  price: ${this.props.navigation.state.params.price}
                </Text>
            </View>
          </View>
          <View style = { styles.borderBox }>
            <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>

        </View>
        <View style={ styles.bottomButtons }>
          <TouchableOpacity
            onPress={() => {
              navigate("MakePosting")
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.bottomButtonsText : styles.else }>new posting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate("Home")
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.bottomButtonsText : styles.else }>home</Text>
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
    alignContent: 'space-around',
    backgroundColor: '#E9E9E9',
    height: '50%',
  },
  border: {
    fontFamily: 'barcode',
    fontSize: 30,
    flexWrap: 'nowrap',
  },
  borderBox: {
    width: '110%',
    height: '4%',
  },
  bottomButtons: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomButtonsText: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  button: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
  },
  buttonText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 18,
    color: '#024C2E',
  },
  buttonTextElse: {
    fontSize: 18,
    color: '#024C2E',
  },
  else: {
    fontSize: 20,
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
  info: {
    fontFamily: 'source-code-pro',
    fontSize: 16,
  },
  infoElse: {
    fontSize: 16,
  },
  pressedTab: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  tab: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
    marginBottom: '2%',
  },
});
