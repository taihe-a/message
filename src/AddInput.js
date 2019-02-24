import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Input extends Component {

  render() {

    return (
      <View style={styles.container}>
  <Text style={styles.intro}>あなたの仲間を紹介しよう</Text>

      <View >
      <Image 
      style={{width: 30, height: 30}}
      source={require('../Image/dog.jpg')}
      />
   <Text style={styles.name}>user</Text>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            onChangeText={this.props.onChange}
            underlineColorAndroid='transparent'
            value={this.props.text}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.onPress}
          >
 <Text style={styles.buttonText}>紹介</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 14,
  },
  input: {
    height: 50,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
    marginRight: 20,
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#006060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: 'white',
  fontSize: 20,
},
intro: {
marginTop:20,
alignItems: 'center',
}
});