import React, {Component} from 'react';
import { StyleSheet,  View } from 'react-native';

import UserInfo from '../components/UserInfo'

export default class UserOneScreen extends Component 
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
  