import React, { Component } from 'react';
import {StyleSheet, View,Text,TouchableHighlight} from "react-native";
import {store} from "../store/Store";
import {observer} from  "mobx-react"

@observer
export default class Tab2Page extends Component{
    static navigationOptions = {
        title: 'TAB2',
    };
    componentWillMount(){
        console.log(this.props+"~~~~~~~~componentWillMount~~~~~~~~~~~~~")
    }

    componentDidMount () {
        console.log(this.props+"~~~~~~~~componentDidMount~~~~~~~~~~~~~")

    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps.props+"~~~~~~~~componentWillReceiveProps~~~~~~~~~~~~~")

    }
    shouldComponentUpdate (nextProps,nextState) {
        console.log(nextProps+"~~~~~~~~shouldComponentUpdate~~~~~~~~~~~~~"+nextState)
        return true;

    }
    componentWillUpdate (nextProps,nextState) {
        console.log(nextProps+"~~~~~~~~componentWillUpdate~~~~~~~~~~~~~"+nextState)

    }
    componentDidUpdate (prevProps,prevState) {
        console.log(prevProps+"~~~~~~~~componentDidUpdate~~~~~~~~~~~~~"+prevState)

    }

    render(){
        console.log(this.state)
            return (
                <View style={styles.container}>
                    <TouchableHighlight onPress={()=>{store._toggleStatus()}}>
                        <Text style={store.status ? styles.instructions:styles.instructions1}> tab2</Text>
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
    instructions1: {
        textAlign: 'center',
        color: '#f96060',
        marginBottom: 5,
    },
});