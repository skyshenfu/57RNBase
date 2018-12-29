import React, { Component } from 'react';
import {StyleSheet, View,Text,TouchableHighlight} from "react-native";
import {store} from "../store/Store";

export default class Tab2Page extends Component{
    static navigationOptions = {
        title: 'TAB2',
    };
    render(){
        console.log(this.props)
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{store._toggleStatus()}}>
                    <Text style={styles.instructions}>tab2</Text>

                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});