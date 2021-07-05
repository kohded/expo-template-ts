import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Login } from '../../screens/Login/Login';
import { NotFound, notFoundStackHeaderOptions } from '../../screens/NotFound/NotFound';
import { loginStackHeaderOptions, screenOptionsStack } from '../options';

export const StackNavigator = createStackNavigator<StackParamList>();

export const LoginStack = (): JSX.Element => (
  <StackNavigator.Navigator screenOptions={screenOptionsStack}>
    <StackNavigator.Screen component={Login} name="Login" options={loginStackHeaderOptions} />
    <StackNavigator.Screen
      component={NotFound}
      name="NotFound"
      options={notFoundStackHeaderOptions}
    />
  </StackNavigator.Navigator>
);
