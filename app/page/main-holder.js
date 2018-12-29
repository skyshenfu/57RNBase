import React from 'react';
import Tab1Page from './tab1';
import Tab2Page from './tab2';
import Tab3Page from './tab3';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
const MainTabNavigator=createBottomTabNavigator({
    tab1:Tab1Page,
    tab2:Tab2Page,
    tab3:Tab3Page
});
export const  TabNavigator=createAppContainer(MainTabNavigator);