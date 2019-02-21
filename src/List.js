import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';

export default class List extends Component{

  render() {

   
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>List</Text>
        <FlatList
  data={this.props.items}
  renderItem={({item}) => 
  <View>
  <Text>{item.text}です</Text>
  <Text>{item.date}</Text>
  <Text></Text>
  </View>
}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginTop:10,
    },
  });