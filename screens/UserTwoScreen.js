import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UserInfo from '../components/UserInfo'

export default class UserTwoScreen extends Component 
{
    render()
    {
        return (
        <View style={styles.container}>
            <UserInfo />
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
  