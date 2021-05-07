import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList,ActivityIndicator,
    SafeAreaView, Button } from 'react-native';
import {ListItem, SearchBar} from "react-native-elements";
import async from "async";
import * as params from "react-native";


class App extends Component {
    constructor(props) {
        super(props);

        this.artist = this.props.route.params.artist.toString();

        this.state = {
            data: [],
            // albumdata:[],
            apiResponseJson: null,

        };
    }

    componentDidMount() {
        this.getArtistData();
        // this.getAlbumData();
    }

    getArtistData = search => {
        const url = `https://theaudiodb.com/`;
        const endurl = `api/v1/json/1/search.php?s=` + this.artist;

        fetch(url + endurl)
            .then(response =>
                response.json()
            )
            .then(res => {
                this.setState({
                    data: res.artists,
                });

            })
            .catch(error => console.log(error))
    }

    /*
        getAlbumData =  () => {
            const albumurl = 'https://theaudiodb.com/';
            const endalbumurl= 'api/v1/json/1/album.php?i='+this.state.data.idArtist;

            fetch(albumurl + endalbumurl)
                .then(response =>
                    response.json()
                )
                .then(res => {
                    this.setState({
                        data: res.artists,
                        artistid: res.artists.idArtist
                    });

                })
                .catch(error => console.log(error))
        } */

    render() {
        console.log(this.artist);
        return (
            <View>

                            <Text style={styles.title}> {this.artist}</Text>


            </View>
        );
    }
}
/*
{this.state.data.map((item) => {
    return (
        <View>
            <Text style={styles.title}> {item.strArtist}</Text>

        </View>
    )
})
}*/

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

export default App;

