import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';
import {Search} from '../screens';
import {Expiring} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false
          }}
        >           
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        let colorIco;
                        colorIco = focused ? 'blue' : 'black';
                       return <Ionicons name={'add-circle'} color={colorIco} size={25}/>
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'black',
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => {
                        let colorIco;
                        colorIco = focused ? 'blue' : 'black';
                       return <Ionicons name={'search'} color={colorIco} size={25}/>
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'black',
                }}
            />
            <Tab.Screen 
                name="Expiring"
                component={Expiring}
                options={{
                    tabBarIcon: ({focused}) => {
                        let colorIco;
                        colorIco = focused ? 'blue' : 'black';
                       return <Ionicons name={'alarm'} color={colorIco} size={25}/>
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'black',
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;