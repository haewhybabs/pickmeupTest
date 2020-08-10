import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login';
import Splash from './Splash';

export default function Route(){

    return (
        <Navigator/>
    )
}

const screens = {
    Splash: {
        screen: Splash,
        header: null,
    },
    Login: {
        screen: Login,
        header:null
    }
    
}
const headerOption={
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
const HomeStack = createStackNavigator(screens,headerOption);

const Navigator = createAppContainer(HomeStack);