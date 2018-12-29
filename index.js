/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React,{Component} from "react";
import {Router} from "./app/router";

/**
 * 入口，负责导入router和注册应用
 */
class App extends Component<Props> {
    render() {
        return (
            <Router/>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
