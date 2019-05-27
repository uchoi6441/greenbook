import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ListItem, Modal } from 'react-native';
import { Font } from 'expo';
import { getMyTags, createTag } from './../services/tag-actions'
import MyTagsButton from './../components/MyTagsButton'
import { FluidNavigator } from 'react-navigation-fluid-transitions';

export class MyTagsScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      data: [],
      modalVisible: false,
      tagItem: '',
    };
  }
  componentWillMount() {
    getMyTags().then((result) => {
      this.setState({ data: result })
    })
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>my tags</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
          <TouchableOpacity
            onPress={() => {
              navigate('MyPostings')
            }}
          >
          <Text style={styles.tab}>my postings / </Text>
          </TouchableOpacity>
          <Text style={styles.pressedTab}>my tags</Text>
        </View>
        <View style={ styles.body }>
          <Modal transparent={false} visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <View style={styles.modalInset}>
                <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>make a new tag</Text>
                <View style={styles.tagInput}>
                  <TextInput
                    style={ this.state.fontLoaded ? styles.userInfoText : styles.else }
                    placeholder="type a title, ISBN, course, or author..."
                    placeholderTextColor='#000'
                    onChangeText={(tagItem) => this.setState({tagItem})}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.state.tagItem != '') {
                        createTag({ item: this.state.tagItem }).then((result) => {
                          this.setModalVisible(!this.state.modalVisible);
                          navigate({ routeName: 'MyTags', key: (Math.random() * 10000).toString() })
                        })
                      }
                      else {
                        alert('Please type in a tag')
                      }
                    }}>
                    <Text style={ this.state.fontLoaded ? styles.makeNewTag : styles.else }>add tag</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      navigate({ routeName: 'MyTags', key: (Math.random() * 10000).toString() })
                    }}>
                    <Text style = { this.state.fontLoaded ? styles.back : styles.else }>back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <View style = { styles.borderBox }>
            <Text style={ this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
          </View>
          <View style={ styles.greyBar }>
            <Text style={ this.state.fontLoaded ? styles.greyBarText : styles.else }>you will be notified if any of your tags appear on the bulletin board</Text>
          </View>
          <View style = {{ height: '92%', width: '100%' }}>
            <View style={styles.add}>
              <Image
                source={require('./../assets/images/tag.png')}
                style={ styles.tagImage }
              />
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text style={this.state.fontLoaded ? styles.addTag : styles.else}>add tag</Text>
              </TouchableOpacity>
            </View>
            <View style = {{ height: '92%', width: '100%' }}>
            <FlatList
              data = { this.state.data }
              renderItem = {({ item }) => (
                <MyTagsButton
                  font = { this.state.fontLoaded }
                  thisTag = { item.item }
                  tagkey = { item.key }
                  navigation = { this.props.navigation }
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
          </View>
          <View style = { styles.borderBox }>
            <Text style={this.state.fontLoaded ? styles.border : styles.else }>hellomynameisjennyandyoucantunderstand</Text>
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
  add: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  addTag: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  back: {
    fontSize: 20,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E9E9E9',
    height: Dimensions.get('window').height / 2.2,
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
    marginTop: Dimensions.get('window').height / 100 * 5,
  },
  bottomButtonsText: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  else: {
    fontSize: 20,
  },
  greyBar: {
    backgroundColor: '#CFCFCF',
    alignContent: 'center',
    marginBottom: '2%',
    marginTop: -15,
  },
  greyBarText: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
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
  makeNewTag: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  modal: {
    justifyContent: 'center',
    alignContent: 'center',
    height: Dimensions.get('window').height,
  },
  modalInset: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 5,
    height: Dimensions.get('window').height * .5,
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
  tagInput: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    padding: 5,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
    marginBottom: '2%',
  },
});
