import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabBottomNavigator from './MainTabNavigator';

import Splash from '../views/splash-screen';

import ForgotPassword from '../views/user/forgot-password';
import Login from '../views/user/login';

const AppNavigator = createStackNavigator({
    //Screens
    ForgotPassword: {
        screen: ForgotPassword,
    },
    Login: {
        screen: Login,
    },
    Splash: {
        screen: Splash,
    },
}, {
    headerMode: 'none',
    initialRouteName: 'Login',
});

export default createAppContainer (
    createStackNavigator(
        {
          Auth: AppNavigator,
          Bottom: TabBottomNavigator,
        },
        {
          headerMode: 'none',
          headerShown: false,
          initialRouteName: 'Auth',
        },
      ),
);