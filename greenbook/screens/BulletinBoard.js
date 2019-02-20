import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import BulletinBoardPosting from './../components/BulletinBoardPosting';

export class BulletinBoardScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
    };
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>bulletin board</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style={ styles.greyBar }>
            <Text style={ this.state.fontLoaded ? styles.greyBarText : styles.else }>search by title, ISBN, course, professor, author...</Text>
          </View>
          <View style={styles.searchView}>
            <View style={styles.borderBox}>
              <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
            </View>
            <FlatList
              data={[
                {key: '1', title: {}, edition: {}, publisher: {}, author: {}, ISBN: {}, course: {}, quantity: {}, lowPrice: {}},
              ]}
              renderItem = {({ item }) => (
                <TouchableOpacity onPress={() =>
                  { navigate(item.navigation) }
                }>
                  <BulletinBoardPosting
                    font = { this.state.fontLoaded }
                    navigation = { this.props.navigation }
                    destination = { 'Home' }
                    title = { item.title }
                    edition = { item.edition }
                    publisher = { item.publisher }
                    author = { item.author }
                    ISBN = { item.ISBN }
                    course = { item.course }
                    quantity = { item.quantity }
                    lowPrice = { item.lowPrice }
                  />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
            <View style={styles.borderBox}>
              <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
            </View>
          </View>
        </View>
        <View style={ styles.bottomButtons }>
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
  border: {
    fontFamily: 'barcode',
    fontSize: 30,
    flexWrap: 'nowrap',
  },
  borderBox: {
    width: '110%',
  },
  else: {
    fontSize: 20,
  },
  greyBar: {
    backgroundColor: '#A8A8A8',
    alignContent: 'center',
    marginBottom: '2%',
  },
  greyBarText: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
    flexWrap: 'wrap',
    marginLeft: '2%',
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
  vineImage: {
    transform: [{ rotate: '180deg'}],
    marginBottom: '2%',
  },
});
