import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList,ActivityIndicator,
    SafeAreaView, Button } from 'react-native';
import {ListItem, SearchBar} from "react-native-elements";


export default class SearchBar extends React.Component {
    state = {
        search: '',
    };

    render() {
     return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={
                value={search}
                navigation = {() => navigation.navigate("Albums", {artist: "this.state.searchTxt"})}}
            />
        );
    }
}