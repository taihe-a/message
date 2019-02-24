import React, {Component} from 'react';
import {Platform
      , StyleSheet
      , Text
      , View
      , AsyncStorage} from 'react-native';
import Status from './src/Status'
import List from './src/List'
import Input from './src/AddInput'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       counter:100,
       text:"",
       list:[],
       listCount:0,
       date: new Date().toLocaleString(),
    };
    let user1={
      name:"user1",
     image:'../Image/dog.jpg',
     applause:100,
     applaused:0,
      }
      let user2={
       name:"user1",
       image:'../Image/horse.jpg',
       applause:100,
       applaused:0,
        }
      let user3={
       name:"user1",
       image:'../Image/tartle.jpg',
       applause:100,
       applaused:0,
        }
       let user4={
        name:"user1",
        image:'../Image/dog.jpg',
        applause:100,
        applaused:0,
         }
  }
  _onChangeText = (text) => {
    this.setState({ text });
  
  }
  _onPress = () => {
    const {
      text,
      list,
      listCount,
      date
    } = this.state;
    const _list = list.concat();
    _list.push({
      key: listCount,
      text,
      date,
    });
    this.setState({
      text: '',
      list: _list,
      listCount: this.state.listCount + 1,
      date:new Date().toLocaleString(),
    });
    
  }
  
  render() {
    const {text,list,} = this.state;

    return (
      <View style={styles.container}>
        <Status />
        <Input
        onChange={this._onChangeText}
        onPress={this._onPress}
        text={text}
        />
        <View style={styles.welcome}>
        <List 
        getDay={this.getDay}
        items={list}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
   flex:1,
   marginTop:0,
  },
  inst: {
    flex: 1,
  },
});
