import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppHeader from "../AppHeader";

export default class WriteStoryScreen extends React.Component{

    render(){
        return(
            <View>
                <AppHeader />
                <Text>Write Story</Text>
            </View>
        )
    }

}