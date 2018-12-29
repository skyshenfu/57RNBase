import React, { Component } from 'react';
import {StyleSheet, View,Text,TouchableHighlight} from "react-native";

/**
 * 第一个tab
 * 规范化：page目录下的表示为全屏的页面，通过navigationOptions来指定标题名
 */
export default class Tab1Page extends Component{
    static navigationOptions = {
        title: 'TAB1',
    };

    render(){
        console.log(this.props)
        return (
                <View style={styles.container}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate("Sub")}>

                    <Text style={styles.welcome}>tab1</Text>
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
        backgroundColor: '#F96',
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