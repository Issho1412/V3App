import React, {Component} from 'react';
import { createBottomTabNavigator,} from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../views/home';
import Schedules from '../views/schedules/schedules';

import Profile from '../views/profile/profile-menu';
import ProfileSetting from '../views/profile/profile-setting';

import CreateStudent from '../views/attendance/create-student';
import QRCode from '../views/attendance/qr-code';
import TodayLesson from '../views/attendance/today-lesson';

import paramColor from '../constants/colors';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  CreateStudent: {
    screen: CreateStudent,
  },
  Profile:{
      screen: Profile,
  },
  ProfileSetting: {
      screen: ProfileSetting,
  },
  Schedules: {
    screen: Schedules,
  },
  TodayLesson: {
    screen: TodayLesson,
  },
  QRCode: {
    screen: QRCode,
  }
}, {
  headerMode: 'none',
  headerShown: false,
  initialRouteName: 'Home'
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      src={require('../assets/images/home.png')}
      activesrc={require('../assets/images/home_rz.png')}
      focused={focused}
    />
  ),
}

const SchedulesStack = createStackNavigator({
  Schedule: Schedules,
},{
  headerMode: "none"
});
SchedulesStack.navigationOptions = {
  tabBarLabel: 'Schedules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      src={require('../assets/images/day.png')}
      activesrc={require('../assets/images/day_rz.png')}
      focused={focused}
    />
  ),
}

const ProfileStack = createStackNavigator({
  Profile: Profile,
  ProfileSetting: ProfileSetting,
},{
  initialRouteName: 'Profile',
  headerMode: "none"
});
ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      src={require('../assets/images/profile.png')}
      activesrc={require('../assets/images/profile_rz.png')}
      focused={focused}
    />
  ),
}

const QRCodeStack = createStackNavigator({
  QRCode: QRCode,
  CreateStudent: CreateStudent,
},{
  headerMode: "none"
});
QRCodeStack.navigationOptions = {
  tabBarLabel: 'QRCode',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      src={require('../assets/images/qrcode.png')}
      activesrc={require('../assets/images/qrcode_rz.png')}
      focused={focused}
    />
  ),
}
export default createBottomTabNavigator({
  Home: HomeStack,
  Schedules: SchedulesStack,
  Profile: ProfileStack,
  QRCode: QRCodeStack,
}, {
  animationEnabled: false,
  swipeEnabled: false,
  tabBarPosition: 'bottom',  
  tabBarOptions: {
    activeTintColor: paramColor.bgHeader,
    labelStyle:{ fontSize: 10,},
    inactiveTintColor: paramColor.mainTextColor,
    showLabel: true,
    style: {
      borderTopWidth: 0,
      paddingTop: 3,
      paddingBottom: 4,
      height: 45,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 0 }
    }
  }
},
 {
  headerMode: 'none',
  headerShown: false,
  initialRouteName: 'Home',
  resetOnBlur:true
});

