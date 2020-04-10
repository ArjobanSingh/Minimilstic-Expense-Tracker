import React from 'react';
import { StyleSheet, View } from 'react-native';

// In project Imports
import UserOneScreen from './screens/UserOneScreen'
import UserTwoScreen from './screens/UserTwoScreen'

// expo imports
import Constants from 'expo-constants';

// third party imports
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User1" component={UserOneScreen} />
      <Tab.Screen name="User2" component={UserTwoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop :Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
