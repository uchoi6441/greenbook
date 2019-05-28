import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Font } from 'expo';
import BulletinBoardPosting from './../components/BulletinBoardPosting';
import { searchDatabase } from './../services/database-actions';
import TrendingSearches from './../components/TrendingSearches';

export class BulletinBoardScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      data: []
    };
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          backgroundColor: "#000000",
        }}
      />
    );
  };
  render() {
    const { navigate } = this.props.navigation
    const algoliasearch = require('algoliasearch');
    const searchClient = algoliasearch("P9LKM9IWML", "41b06325003d00a6bb7650a9d64a7c00");
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
            <TextInput
              style={ this.state.fontLoaded ? styles.greyBarText : styles.else }
              placeholder="search by title, ISBN, course, professor, or author..."
              placeholderTextColor='#000'
              onChangeText={(search) => {
                searchDatabase(search).then((result) => {
                  this.setState({ data: result })
                  console.log(result);
                })
              }}
            />
          </View>
          <View style={styles.searchView}>
            <View style={styles.borderBox}>
              <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
            </View>
            <FlatList
              data = { this.state.data }
              renderItem = {({ item }) => (
                  <BulletinBoardPosting
                    navigation = { this.props.navigation }
                    font = { this.state.fontLoaded }
                    title = { item.title }
                    author = { item.author }
                    ISBN = { item.isbn13 }
                    user = { item.user }
                  />
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
            <View style={{alignSelf:'stretch', backgroundColor: '#E4E4E4'}}/>
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
          <Text style={ this.state.fontLoaded ? styles.trending : styles.else}>trending searches...</Text>
          <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <TrendingSearches
              item = { 'cosc 22' }
            />
            <TrendingSearches
              item = { 'biol 22' }
            />
            <TrendingSearches
              item = { 'litwig' }
            />
          </View>
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
    marginTop: Dimensions.get('window').height / 17,
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
    height: '4%',
  },
  else: {
    fontSize: 20,
  },
  greyBar: {
    backgroundColor: '#CFCFCF',
    alignContent: 'center',
    marginBottom: '2%',
    height: Dimensions.get('window').height / 100 * 4,
    flexWrap: 'wrap',
  },
  greyBarText: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
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
  searchView: {
    height: Dimensions.get('window').height / 2,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
    marginBottom: '2%',
  },
});
