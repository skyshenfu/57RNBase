import React, { Component } from 'react';
import {StyleSheet, View,Text,TouchableHighlight} from "react-native";
export default class SubPage extends Component{

    static navigationOptions = {
        title: '子页',
    };

render(){
        console.log(this.props)
    const { navigation } = this.props;
    return (
    <View style={styles.container}>
                <TouchableHighlight onPress={()=>this.props.navigation.push("Sub")}>

                    <Text style={styles.welcome}>sub</Text>
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