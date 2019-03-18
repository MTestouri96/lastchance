import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Designs from '../Desgins/Designs';

export default class Categorie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Dinfo: [
                {
                    Nom: "Sandwich",
                },
                {
                    Nom: "Pizza",
                },
                {
                    Nom: "Salade",
                },
                {
                    Nom: "Crepe",
                },
                {
                    Nom: "Boisson",
                },
                {
                    Nom: "Plat",
                },
            ]
        };
    };

    render() {
        return (
            <ScrollView horizontal>
                {
                    this.state.Dinfo.map((item) => {
                        return (
                            <View style={Designs.catbtn}>
                                <TouchableOpacity onPress={() => (alert("hello"))}>
                                    <Text style={Designs.txtbtn}>{item.Nom}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    };
};