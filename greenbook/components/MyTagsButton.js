import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';
import { deleteTag } from './../services/tag-actions'
import moment from 'moment'

export default class MyTagsButton extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.postingBox}>
        <View style = {styles.button} >
          <View style = {{ width: '65%', paddingRight: 10, alignSelf: 'center' }}>
            <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>
              { this.props.thisTag }
            </Text>
          </View>
          <View style = {{ width: '35%', borderLeftWidth: 2, paddingLeft: 10, justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              onPress={() => {
                deleteTag(this.props.tagkey).then((result) => {
                  navigate({ routeName: 'MyTags', key: (Math.random() * 10000).toString() })
                })
              }}
            >
              <Text style={ this.state.fontLoaded ? styles.link : styles.linkElse }>remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    justifyContent: 'center',
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
  link: {
    fontFamily: 'source-code-pro',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linkElse: {
    fontSize: 14,
  },
});
