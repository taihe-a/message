import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class ImageChange extends Component {
    constructor(props){
        super(props);
        
    }
    _renderImage(count){
        switch (count) {
            case 1:
              return (
              <View>
              <Image 
                style={{width: 30, height: 30}}
                source={this.props.date[0].uri}
                />
                <Text>{this.props.date[0].name}</Text>
              </View>);
              break;
            case 2:
              return (<View>
                <Image 
                  style={{width: 30, height: 30}}
                  source={this.props.date[1].uri}
                  />
                  <Text>{this.props.date[1].name}</Text>
                </View>);
              break;
              case 3:
              return (<View>
                <Image 
                  style={{width: 30, height: 30}}
                  source={this.props.date[2].uri}
                  />
                  <Text>{this.props.date[2].name}</Text>
                </View>);
              break;
            default:
            return (<View>
                <Text>not found user</Text>
              </View>);
              break;
          }
    }
    render(){
        return(
            <TouchableOpacity
            onPress={this.props.onPress}>
              {this._renderImage(this.props.count)}
            </TouchableOpacity>
        );
    }
}