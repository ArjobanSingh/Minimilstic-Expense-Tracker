import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

// In project Imports
import UserOneScreen from './screens/UserOneScreen'
import UserTwoScreen from './screens/UserTwoScreen'
import ResultScreen from './screens/ResultScreen'
// expo imports
import Constants from 'expo-constants';

// third party imports
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator>
        <Tab.Screen name="User1">
          {navigationProps => <UserOneScreen {...navigationProps} 
                                setUserName={props.setUserName} 
                                setTotal={props.setTotal} 
                                reset={props.reset}/>}
        </Tab.Screen> 
        <Tab.Screen name="User2">
          {navigationProps => <UserTwoScreen {...navigationProps} 
                                setUserName={props.setUserName} 
                                setTotal={props.setTotal} 
                                reset={props.reset}/>}
        </Tab.Screen> 
        <Tab.Screen name="Result">
          {navigationProps => <ResultScreen {...navigationProps} 
                                moreSpender={props.moreSpender}
                                total={props.total} />}
        </Tab.Screen>         
    </Tab.Navigator>
  );
}
export default class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      userOneName : '',
      userTwoName : '',
      highestTotaluser: '',
      userOneExpenseTotal : 0,
      userTwoExpenseTotal : 0,
      highestTotal:0
    }
  }

  setUserName = (name, whichUser) => {
    switch(whichUser){
      case 1:
        this.setState({
          userOneName: name
        });
        break;
      case 2:
        this.setState({
          userTwoName: name
        });
        break;
      default:
        console.log("Illelgal Selection")    
    }

  }

  getTotal = () =>{
    if (this.state.userOneExpenseTotal > this.state.userTwoExpenseTotal)
    {
      this.setState({
        highestTotaluser: this.state.userOneName,
        highestTotal: this.state.userOneExpenseTotal
      })
    }
    else if(this.state.userOneExpenseTotal < this.state.userTwoExpenseTotal)
    {
      this.setState({
        highestTotaluser: this.state.userTwoName,
        highestTotal: this.state.userTwoExpenseTotal
      })
    }
    else if (this.state.userOneExpenseTotal === 0 || this.state.userTwoExpenseTotal === 0)
    {
      this.setState({
        highestTotaluser: "",
        highestTotal: 0
      })
    }
    else{
      // Mean both, have spent equal and not 0
      this.setState({
        highestTotaluser: "Both Have Spent Same",
        highestTotal: this.state.userOneExpenseTotal
      })
    }
  }

  setTotal = (total, whichUser) => {
    switch(whichUser){
      case 1:
        this.setState({
          userOneExpenseTotal: total
        },
        () => this.getTotal()
        );
        break;
      case 2:
        this.setState({
          userTwoExpenseTotal: total
        },
        () => this.getTotal()
        );
        break;
      default:
        console.log("Illelgal Selection")    
    }
  }

  reset = (whichUser) => {
    switch(whichUser){
      case 1:
        this.setState({
          userOneName: '',
          userOneExpenseTotal: 0
        },
        () => this.getTotal())
        break;
      case 2:
        this.setState({
          userTwoName: '',
          userTwoExpenseTotal: 0
        },
        () => this.getTotal())
        break;         
    }
  }

  render()
  {
    return (
      <View style={styles.container}>
        <NavigationContainer >
          <MyTabs setUserName={this.setUserName} 
                  setTotal={this.setTotal} 
                  reset={this.reset} 
                  moreSpender={this.state.highestTotaluser} 
                  total={this.state.highestTotal} />
        </NavigationContainer>
      </View>
    )
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer >
//         <MyTabs />
//       </NavigationContainer>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    marginTop :Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
