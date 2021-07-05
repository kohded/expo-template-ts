import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../../screens/Home/Home';
import { NotFound, notFoundStackHeaderOptions } from '../../screens/NotFound/NotFound';
import { homeStackHeaderOptions, screenOptionsStack } from '../options';

export const StackNavigator = createStackNavigator<StackParamList>();

export const HomeStack = (): JSX.Element => (
  <StackNavigator.Navigator screenOptions={screenOptionsStack}>
    <StackNavigator.Screen component={Home} name="Home" options={homeStackHeaderOptions} />
    <StackNavigator.Screen
      component={NotFound}
      name="NotFound"
      options={notFoundStackHeaderOptions}
    />
  </StackNavigator.Navigator>
);
