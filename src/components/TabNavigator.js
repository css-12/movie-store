import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Novidade from '../screens/Novidade';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'darkseagreen',
        tabBarStyle: { backgroundColor: '#F7FEE7' },
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.homeIconContainer,
                focused && styles.homeIconContainerFocused,
              ]}
            >
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={40}
                color={color}
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Lançamento"
        component={Novidade}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'chatbox' : 'chatbox-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  homeIconContainer: {
    backgroundColor: '#F7FEE7',
    borderColor: 'darkseagreen',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginTop: -25,
    width: 65,
    height: 65,
    alignItems: 'center',
  },
  homeIconContainerFocused: {
    borderColor: 'coral',
  },
});
