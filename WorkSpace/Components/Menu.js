import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Designs from '../Desgins/Designs';

export default class Categorie extends Component{
    
    constructor(props){
        super(props);
    };

    render(){
        return(
            <View>
                <Text style={Designs.txtttl}>Menu</Text>
                
            </View>
        );
    };
};