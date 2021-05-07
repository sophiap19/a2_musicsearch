import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ListItem, SearchBar} from "react-native-elements";

import APIScreen from "./App/Screens/APIScreen.js";
import WelcomeScreen from "./App/Screens/WelcomeScreen.js";

const Stack =createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{title: 'Welcome'}}>
                </Stack.Screen>
                <Stack.Screen
                    name="API"
                    component={APIScreen}
                    options={{title: 'Albums'}}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


