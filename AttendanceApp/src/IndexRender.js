import AppNavigator  from './navigation/AppNavigator';
import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import SplashScreen from 'react-native-splash-screen';

export default class IndexRender extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            isLoading: true
        }
    }

    componentDidMount(){
        if(SplashScreen != null){
            SplashScreen.hide();
        }
    }
    render(){
        return (
            <Provider store={configureStore()}>
                <AppNavigator/> 
            </Provider>
           
        );
    }
}