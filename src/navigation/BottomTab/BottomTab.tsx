import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeStack } from '../Stack/Home';
import { LoginStack } from '../Stack/Login';
import {
  homeBottomTabNavigationOptions,
  loginBottomTabNavigationOptions,
  screenOptionsBottomTab,
} from '../options';

const BottomTabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const BottomTab = (): JSX.Element => (
  <BottomTabNavigator.Navigator initialRouteName="Home" screenOptions={screenOptionsBottomTab}>
    <BottomTabNavigator.Screen
      component={HomeStack}
      name="Home"
      options={homeBottomTabNavigationOptions}
    />
    <BottomTabNavigator.Screen
      component={LoginStack}
      name="Login"
      options={loginBottomTabNavigationOptions}
    />
  </BottomTabNavigator.Navigator>
);
