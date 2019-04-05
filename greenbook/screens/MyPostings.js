import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ListItem } from 'react-native';
import { Font } from 'expo';
import { getMyPostings } from './../services/posting-actions'
import MyPostingsButton from './../components/MyPostingsButton'
import { FluidNavigator } from 'react-navigation-fluid-transitions';


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
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          backgroundColor: "#000000",
          alignSelf: 'center',
          width: Dimensions.get('window').width / 10 * 9,
        }}
      />
    );
  };
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
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <Text style={styles.pressedTab}>my postings</Text>
          <TouchableOpacity
            onPress={() => {
              navigate('MyTags')
            }}
          >
            <Text style={styles.tab}> / my tags</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.body }>
          <View style = { styles.borderBox }>
            <Text style={ this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
          <View style = {{ height: '92%', width: '100%' }}>
            <FlatList
              data = { this.state.data }
              renderItem = {({ item }) => (
                <MyPostingsButton
                  font = { this.state.fontLoaded }
                  title = { item.title }
                  isbn = { item.isbn }
                  price = { item.price }
                  time = { item.timestamp }
                  postkey = { item.key }
                  navigation = { this.props.navigation }
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
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
    alignContent: 'space-around',
    backgroundColor: '#E9E9E9',
    marginTop: Dimensions.get('window').height / 100 * 2,
    height: Dimensions.get('window').height / 2,
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
