import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class MakePostingScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      isbn: '',
      dept: '',
      prof: '',
      numb: '',
    };
  }
  deptSelected(dept) {
    this.state.dept = dept;
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
            <Text style={ this.state.fontLoaded ? styles.greyBarText : styles.else }>all other inputs are optional.</Text>
          </View>
          <View style={styles.postingView}>
            <View style={{flexDirection:'row', flex: 1, alignItems: 'center'}}>
              <Text style={ this.state.fontLoaded ? styles.isbn : styles.else }>ISBN: </Text>
              <View style={ styles.response }>
                <TextInput
                  style={ this.state.fontLoaded ? styles.isbnText : styles.else }
                  onChangeText={(isbn) => this.setState({isbn})}
                />
              </View>
            </View>
            <View style={{borderBottomWidth: 2, width: '90%', alignSelf: 'center'}}/>
            <View style={{flex: 3, justifyContent: 'space-around'}}>
              <View style={{flexDirection:'row'}}>
                <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>department:</Text>
                <View style={ styles.deptResponse }>
                  <FlatList
                    data={[
                      {key: 'AAAS'},
                      {key: 'ANTH'},
                      {key: 'ARAB'},
                      {key: 'ARTH'},
                      {key: 'ASCL'},
                      {key: 'ASTR'},
                      {key: 'BIOL'},
                      {key: 'CHEM'},
                      {key: 'CHIN'},
                      {key: 'CLST'},
                      {key: 'COCO'},
                      {key: 'COGS'},
                      {key: 'COLT'},
                      {key: 'COSC'},
                      {key: 'CRWT'},
                      {key: 'EARS'},
                      {key: 'ECON'},
                      {key: 'EDUC'},
                      {key: 'ENGL'},
                      {key: 'ENGS'},
                      {key: 'ENVS'},
                      {key: 'FILM'},
                      {key: 'FREN'},
                      {key: 'FRIT'},
                      {key: 'FYS'},
                      {key: 'GEOG'},
                      {key: 'GERM'},
                      {key: 'GOVT'},
                      {key: 'GRK'},
                      {key: 'HEBR'},
                      {key: 'HIST'},
                      {key: 'HUM'},
                      {key: 'INTS'},
                      {key: 'ITAL'},
                      {key: 'JAPN'},
                      {key: 'JWST'},
                      {key: 'LACS'},
                      {key: 'LAT'},
                      {key: 'LATS'},
                      {key: 'LING'},
                      {key: 'MATH'},
                      {key: 'MES'},
                      {key: 'MUS'},
                      {key: 'NAS'},
                      {key: 'PBPL'},
                      {key: 'PHIL'},
                      {key: 'PHYS'},
                      {key: 'PORT'},
                      {key: 'PSYC'},
                      {key: 'QSS'},
                      {key: 'REL'},
                      {key: 'RUSS'},
                      {key: 'SART'},
                      {key: 'SOCY'},
                      {key: 'SPAN'},
                      {key: 'SPEE'},
                      {key: 'THEA'},
                      {key: 'TUCK'},
                      {key: 'WGSS'},
                      {key: 'WRIT'},
                    ]}
                    renderItem = {({ item }) => (
                      <TouchableOpacity onPress={() =>
                        { this.deptSelected(item.key)
                        this.forceUpdate() }
                      }>
                        <Text style={this.state.fontLoaded ? styles.isbnText : styles.else}>{item.key}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>course number:</Text>
                <View style={ styles.response }>
                  <TextInput
                    style={ this.state.fontLoaded ? styles.isbnText : styles.else }
                    onChangeText={(numb) => this.setState({numb})}
                  />
                </View>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={this.state.fontLoaded ? styles.courseProf : style.else}>professor:</Text>
                <View style={ styles.response }>
                  <TextInput
                    style={ this.state.fontLoaded ? styles.isbnText : styles.else }
                    onChangeText={(prof) => this.setState({prof})}
                  />
                </View>
              </View>
            </View>
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
    marginTop: -25,
  },
  bottomImage: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  courseProf: {
    fontSize: 25,
    fontFamily: 'source-code-pro',
    marginLeft: '1%',
  },
  else: {
    fontSize: 20,
  },
  greyBar: {
    backgroundColor: '#A8A8A8',

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
  postingView: {
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    width: Dimensions.get('window').width / 10 * 9,
    marginBottom: '10%',
    marginTop: '10%',
    height: Dimensions.get('window').height / 10 * 4,
  },
  response: {
    backgroundColor: '#EAEFEA',
    borderRadius: 20,
    paddingLeft: '2%',
    flexGrow: 1,
    alignSelf: 'center',
  },
  deptResponse: {
    backgroundColor: '#EAEFEA',
    borderRadius: 20,
    paddingLeft: '2%',
    flexGrow: 1,
    height: 90,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
  wellImage: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
});
