import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const {width} = Dimensions.get('window');

export default class UserInfo extends Component 
{
    constructor(props)
    {
        super(props);
        this.state ={
            nameInput : '',
            savedName : '',
            expenses : [],
            newExpense : ''
        }
    }

    setName = (name) => {
        this.setState({
            nameInput : name 
        })
    }

    saveName = () => {
        if (/\S/.test(this.state.nameInput)) {
            // string is not empty and not just whitespace

            this.setState({
                savedName : this.state.nameInput,
                nameInput: ''
            },
            () => console.log("printing saved name: ",this.state.savedName)
            )
            
            return;
        }
        alert("Name cannot be empty");

        
    }

    resetName = () => {
        this.setState({
            savedName: '',
            expenses: [],
            newExpense: '',
        })
    }

    setExpense = (exp) => {
        this.setState({
            newExpense: exp
        })
    }

    saveExpense = () => {
        if (/\S/.test(this.state.newExpense)) {
            // string is not empty and not just whitespace

            this.setState(prevState => {
                return({
                    expenses : [...prevState.expenses, this.state.newExpense],
                    newExpense: ''
                })
            },
            () => console.log("printing saved expense: ",this.state.expenses.length)
            )
            
            return;
        }
        alert("Expense cannot be empty");
    }

    render()
    {
        let expensesToShow = this.state.expenses.map((exp, i) => {
            return (
                <View key={i} style={{marginTop: 10, height: 50, width: width, padding: 10}}>
                    <Text style={{fontSize: 25, fontWeight:'bold'}}>{`Expense ${i + 1}: ${exp} `}</Text>
                </View>
            )
        })
        return (
        <View style={styles.container}>
            {this.state.savedName === '' ?
            <View style={{flexDirection : 'row', width: width, marginVertical: 10}}>  
                <TextInput
                style = {styles.textInputStyle} 
                placeholder="Enter Your Name" 
                value={this.state.nameInput}
                onChangeText={this.setName} /> 

                <TouchableOpacity
                    style={styles.nameButton}
                    onPress={this.saveName}>

                        <Text style={{color: "#fff", fontSize: 20}}>Submit</Text>

                </TouchableOpacity>

            </View>
            :
            <View style={{flexDirection : 'row', width: width}}>
                <Text style={styles.nameSavedText} >Hello, {this.state.savedName}</Text>
                <TouchableOpacity
                    style={styles.nameButton}
                    onPress={this.resetName}>

                        <Text style={{color: "#fff", fontSize: 20}}>Reset</Text>

                </TouchableOpacity>
            </View>
            }
            <View style={{width: width, backgroundColor: 'gray', height: 2, marginTop: 20}} />

            {!this.state.savedName ?
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>Fill your name to add expenses</Text>
                </View>
                : 
                <View style={{flex: 1}}>
                    {expensesToShow}
                    {this.state.expenses.length < 3 ?
                    <View style={{flexDirection : 'row', width: width, marginVertical: 10}}>  
                        <TextInput
                        style = {styles.textInputStyle} 
                        placeholder="Enter Expense" 
                        value={this.state.newExpense}
                        onChangeText={this.setExpense}
                        keyboardType = 'numeric' /> 

                        <TouchableOpacity
                            style={styles.nameButton}
                            onPress={this.saveExpense}>

                                <Text style={{color: "#fff", fontSize: 20}}>Submit</Text>

                        </TouchableOpacity>

                    </View>
                    :    <View>
                        <View style={{width: width, backgroundColor: 'gray', height: 2, marginTop: 20}} />       
                        <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>You cannot add more than 3 expenses</Text>
                        </View>
                        }
                </View>
            }
        </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textInputStyle : {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width : 0.70 * width,
        margin: 10,
        padding: 5 
    },
    nameButton:{
        height: 40, 
        marginTop: 10,
        marginRight: 10,
        backgroundColor: "#841584",
        width: (width * 0.23),
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameSavedText:{
        height: 40, 
        margin: 10,
        width : 0.70 * width,
        fontSize: 25,
        fontWeight: 'bold'
    }
  });
  