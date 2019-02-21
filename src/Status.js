import React, {Component} from 'react';
import {Platform,
       StyleSheet, 
       Text, 
       View,
       Image} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';



export default class Status extends Component{

  render() {
    let data = [{
      value: 'user1',
    }, {
      value: 'user2',
    }, {
      value: 'user3',
    }];

    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Dropdown
        label='Select User'
        data={data}
      />
      <Image 
      style={{width: 50, height: 50}}
      source={require('../Image/dog.jpg')}
      />
      <Text style={styles.name}>user</Text>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>拍手できる　１００</Text>
        <Text style={styles.text}>拍手された　０</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      fontSize:10,
      marginTop:10,
      paddingTop:0,
      paddingBottom:10,
      width:'100%',
      flexDirection:'row',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    text: {
      fontSize: 15,
      margin: 10,
    },
    textContainer: {
      flexDirection:'row',
      alignSelf: 'flex-end',
      marginBottom:10,
    },
    imageContainer:{
      display:'flex',
      width:80,
    },
    name:{
      textAlign:'center',
      width:50,
    },
  });