import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native';

export default class ResultScreen extends Component{
    constructor(props)
    {
        super(props);
    }


    render(){
        return (
            <View style={styles.container} >
                {this.props.total > 0? 
                <View>
                    <Text style={styles.textStyle}>{this.props.moreSpender}</Text>
                    <Text style={styles.textStyle}>{this.props.total}</Text>
                </View>:
                <Text style={styles.textStyle}>No spendings</Text>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})