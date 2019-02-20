import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ListItem } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import { getMyPostings } from './../services/posting-actions'

export class MyPostingsScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      data: []
    };
  }
  componentWillMount() {
    getMyPostings().then((result) => {
      this.setState({ data: result })
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>my postings</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.pressedTab}>my postings</Text>
          <Text style={styles.tab}> // </Text>
          <TouchableOpacity
            onPress={() => {
              navigate("Home")
            }}
          >
            <Text style={styles.tab}>my tags</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.body }>
          <View style = { styles.borderBox }>
            <Text style={ this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
          <View style = {{ height: '30%', width: '100%' }}>
            <FlatList
              data = { this.state.data }
              renderItem = {({ item }) => (
                  <Text>{item.isbn}</Text>
              )}
            />
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
    alignContent: 'space-between',
    backgroundColor: '#E9E9E9',
  },
  border: {
    fontFamily: 'barcode',
    fontSize: 30,
    flexWrap: 'nowrap',
  },
  borderBox: {
    width: '110%',
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
