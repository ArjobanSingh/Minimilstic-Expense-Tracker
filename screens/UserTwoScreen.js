import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UserInfo from '../components/UserInfo'

export default class UserTwoScreen extends Component 
{
  constructor(props)
  {
    super(props)
  }
    render()
    {
        return (
        <View style={styles.container}>
            <UserInfo 
            setUserName={this.props.setUserName} 
            setTotal={this.props.setTotal}
            reset={this.props.reset}            
            userNumber={2}/>
        </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  