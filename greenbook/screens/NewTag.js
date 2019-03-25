import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ListItem } from 'react-native';
import { Font } from 'expo';
import MyTagsButton from './../components/MyPostingsButton'
import { FluidNavigator } from 'react-navigation-fluid-transitions';

export class NewTagScreen extends React.Component {
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>new tag</Text>
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
              placeholder="type a title, ISBN, course, professor, or author..."
              placeholderTextColor='#000'
            />
          </View>
          <View style = { styles.borderBox }>
            <Text style={ this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
          <View style={ styles.greyBar }>
            <Text style={ this.state.fontLoaded ? styles.greyBarText : styles.else }>you will be notified if any of your tags appear on the bulletin board</Text>
          </View>
          <View style = {{ height: '92%', width: '100%' }}>
            <FlatList
              data = { this.state.data }
              renderItem = {({ item }) => (
                <MyTagsButton
                  font = { this.state.fontLoaded }
                  thisTag = { item.thisTag }
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
            <View style={styles.button}>
              <Text style={this.state.fontLoaded ? styles.new : styles.else}>title, ISBN, author, course, etc...</Text>
            </View>
            <View style={styles.add}>
              <Image
                source={require('./../assets/images/tag.png')}
                style={ styles.tagImage }
              />
              <Text style={this.state.fontLoaded ? styles.addTag : styles.else}>add tag</Text>
            </View>
          </View>
          <View style = { styles.borderBox }>
            <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
        </View>
        <View style={ styles.bottomButtons }>
          <TouchableOpacity
            onPress={() => {
              navigate("MyTags")
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.bottomButtonsText : styles.else }>cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    justifyContent: 'flex-end',
  },
  addTag: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
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
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
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
  new: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
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
  tagImage: {
    width: 25,
    height: 25,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
    marginBottom: '2%',
  },
});
