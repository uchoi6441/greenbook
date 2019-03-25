import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';
import { deletePosting } from './../services/posting-actions'
import moment from 'moment'

export default class MyTagsButton extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
            navigate(this.props.destination)
        }}
        style={ styles.postingBox }
      >
        <View style = {styles.button} >
          <View style = {{ width: '65%', paddingRight: 10 }}>
            <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>
              { this.props.thisTag }
            </Text>
          </View>
          <View style = {{ width: '35%', borderLeftWidth: 2, paddingLeft: 10, justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              onPress={() => {
                deletePosting(this.props.postkey, this.props.title).then((result) => {
                  navigate({ routeName: 'MyPostings', key: (Math.random() * 10000).toString() })
                })
              }}
            >
              <Text style={ this.state.fontLoaded ? styles.link : styles.linkElse }>remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  postingBox: {
    width: '100%',
    height: Dimensions.get('window').height / 5.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
  buttonText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 24,
    color: '#024C2E',
  },
  buttonTextElse: {
    fontSize: 24,
    color: '#024C2E',
  },
  info: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
  },
  time: {
    fontFamily: 'source-code-pro',
    fontSize: 12,
  },
  infoElse: {
    fontSize: 20,
  },
  link: {
    fontFamily: 'source-code-pro',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linkElse: {
    fontSize: 14,
  },
});
