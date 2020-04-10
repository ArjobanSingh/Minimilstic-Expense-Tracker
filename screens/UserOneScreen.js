import React, {Component} from 'react';
import { StyleSheet,  View } from 'react-native';

import UserInfo from '../components/UserInfo'

export default class UserOneScreen extends Component 
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
            userNumber={1}
            />
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
  