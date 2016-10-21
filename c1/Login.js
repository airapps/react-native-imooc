/**
 * Created by buhe on 2016/10/20.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Alert
} from 'react-native';

var {width,height} = Dimensions.get('window');

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    }
    this.onEnterUserName = this.onEnterUserName.bind(this);
    this.onEnterPassword = this.onEnterPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEnterUserName(userName) {
    this.setState({userName: userName});
  }

  onEnterPassword(password) {
    this.setState({password: password});
  }

  onSubmit(){
    Alert.alert(JSON.stringify({
      userName:this.state.userName,
      password:this.state.password,
    }));
  }

  render() {
    return (
        <View style={{flex:1,marginTop:44}}>
          <TextInput
              placeholder={'User Name'}
              onChangeText={this.onEnterUserName}
              value={this.state.userName}
              autoFocus={true}
              style={{height:40,width:width}}
              />
          <TextInput
              placeholder={'Password'}
              onChangeText={this.onEnterPassword}
              value={this.state.password}
              autoFocus={false}
              style={{height:40,width:width}}
              />
          <TouchableOpacity
              onPress={this.onSubmit}
              style={{
                      height:40,
                      width:width,
                      padding:10,
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'black'
                      }}>
            <Text style={{color:'white'}}>登录</Text>
          </TouchableOpacity>
        </View>
    )
  }
}