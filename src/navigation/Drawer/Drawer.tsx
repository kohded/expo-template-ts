import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HomeStack } from '../Stack/Home';
import { LoginStack } from '../Stack/Login';
import { homeDrawerHeaderOptions, loginDrawerHeaderOptions, screenOptionsDrawer } from '../options';

const DrawerNavigator = createDrawerNavigator<DrawerParamList>();

export const Drawer = (): JSX.Element => (
  <DrawerNavigator.Navigator initialRouteName="Home" screenOptions={screenOptionsDrawer}>
    <DrawerNavigator.Screen component={HomeStack} name="Home" options={homeDrawerHeaderOptions} />
    <DrawerNavigator.Screen
      component={LoginStack}
      name="Login"
      options={loginDrawerHeaderOptions}
    />
  </DrawerNavigator.Navigator>
);
