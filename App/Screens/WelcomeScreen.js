import {FlatList, View, Text} from "react-native";
import {ListItem, SearchBar} from "react-native-elements";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";


function WelcomeScreen({navigation}) {

    const [search, setSearch] = useState('');

   /*  useEffect(() => {    // Update the document title using the browser API
        navigation.navigate("API", {artist: {search} })});*/

        return (
            <View>

            <SearchBar placeholder="Search Here..."
                       lightTheme round editable={true}
                       value={search}
                       onChangeText={(val) => { setSearch(val) }}
                       onSubmitEditing={()=>console.log(`Sophia typed ${search}`)}
                       //navigation = {navigation.navigate("API", {artist: {search} })}
            />

                <Text>Sophia Pum 11910969</Text>
            </View>
        );
}
export default WelcomeScreen;