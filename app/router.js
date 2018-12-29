import {createStackNavigator,createAppContainer}from 'react-navigation'
import {TabNavigator} from'./page/main-holder'
import SubPage from "./page/subPage";
const AppNavigator=createStackNavigator({
    Main :{
        screen:TabNavigator,
        navigationOptions:{
            header:null
        }
    },
    Sub :{
        screen:SubPage
    }

},{
    initialRouteName: 'Main',
})
export const  Router=createAppContainer(AppNavigator)