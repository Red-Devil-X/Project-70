import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppHeader from "../AppHeader";

export default class ReadStoryScreen extends React.Component {
    
    render(){
        return(
            <View>
                <AppHeader />
                <Text>Read story</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    header: {},
})