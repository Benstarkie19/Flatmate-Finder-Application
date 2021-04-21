// This page allows to link everything from the bottomnavigation to Button

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';
import HomeScreen from '../screens/home';
import MenuScreen from '../screens/menu';
import HouseScreen from '../screens/house';
import ProfileScreen from '../screens/profile';
import LandScreen from '../screens/land';

const BottomTab = createBottomTabNavigator();

export const searchIcon = style => (
  <Icon {...style} name="search-outline" />
);

export const bellIcon = style => (
  <Icon {...style} name="bell-outline" />
);

export const HomeIcon = style => (
  <Icon {...style} name="home-outline" />   // Icons added from https://akveo.github.io/eva-icons/#/?searchKey=no&type=outline
);

export const proIcon = style => (
  <Icon {...style} name="person-outline" />   // Icons added from https://akveo.github.io/eva-icons/#/?searchKey=no&type=outline
);

const BottomTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>   
        <BottomNavigationTab icon={HomeIcon} />
        <BottomNavigationTab icon={searchIcon} />
        <BottomNavigationTab icon={proIcon} /> 
        <BottomNavigationTab icon={bellIcon} />   
      </BottomNavigation>
    </SafeAreaView>
  );
};
// Bottom navigation alows quick
const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Users" component={HomeScreen} />
    <BottomTab.Screen name="Basket" component={HouseScreen} />
    <BottomTab.Screen name="Land" component={LandScreen} />
    <BottomTab.Screen name="Menu" component={MenuScreen} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} />
  </BottomTab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
