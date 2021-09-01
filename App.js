import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import fire from './fire';
import Tabs from './navigation/tabs';
import {Home, Search, Expiring, Scanner} from './screens';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Expiring" component={Expiring}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
