import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from "react-native";
export default class Tab3Page extends Component{
    _pressState=()=>{
       this.setState({toggle:!this.state.toggle})
    };

    constructor (props){
        super(props);
        this.state={toggle:true}
    }
    static navigationOptions = {
        title: 'TAB3',
    };
    render(){
        console.log(this.props)
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._pressState}>
                    <Text style={this.state.toggle ? styles.instructions:styles.instructions1}> tab3</Text>
                </TouchableHighlight>
            </View>
        )
    }

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
        color: '#00ff00',
        marginBottom: 5,
    },
    instructions1: {
        textAlign: 'center',
        color: '#f96060',
        marginBottom: 5,
    },
});