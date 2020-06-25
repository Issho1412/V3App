/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, { Component } from 'react';
import IndexRender from './src/IndexRender';
import Login from './src/views/user/login';

/*class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen : 'Splash'};
        setTimeout(() => {
            this.setState({ currentScreen : 'Login'})
        }, 3000);
    }
    render(){
        const { currentScreen } = this.state;
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>
        return mainScreen;
    }
}*/
AppRegistry.registerComponent(appName, () => IndexRender);
