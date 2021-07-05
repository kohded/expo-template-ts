import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DrawerHeaderOptions } from '@react-navigation/drawer/src/types';
import { StackHeaderOptions } from '@react-navigation/stack/src/types';
import React from 'react';
import { theme } from '../styles/theme';

// Home
export const homeBottomTabNavigationOptions = (): BottomTabNavigationOptions => ({
  tabBarIcon: () => <Ionicons name="home" size={24} color={theme.colors.primary} />,
});
export const homeDrawerHeaderOptions = (): DrawerHeaderOptions => ({});
export const homeStackHeaderOptions = (): StackHeaderOptions => ({});

// Login
export const loginBottomTabNavigationOptions = (): BottomTabNavigationOptions => ({
  tabBarIcon: () => <Ionicons name="log-in" size={24} color={theme.colors.primary} />,
});
export const loginDrawerHeaderOptions = (): DrawerHeaderOptions => ({});
export const loginStackHeaderOptions = (): StackHeaderOptions => ({});

// Navigators
export const screenOptionsBottomTab = {};
export const screenOptionsDrawer = {};
export const screenOptionsStack = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {},
};
