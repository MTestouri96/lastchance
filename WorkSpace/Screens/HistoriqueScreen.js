import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Designs from '../Desgins/Designs';

export default class HistoriqueScreen extends Component {
    static navigationOptions = {
        title: 'Historique',
        headerStyle: {
            backgroundColor: '#ff6347',
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);

    };

    render() {

        return (
            <ScrollView>
                <View style={Designs.container}>
                    <Text style={Designs.txt}>Solde: {this.props.navigation.state.params.passedData} €</Text>
                    <View flexDirection='row'>
                        <TouchableOpacity style={Designs.logbtn}>
                            <Text style={Designs.txtbtn}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Designs.logbtn}>
                            <Text style={Designs.txtbtn}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    };
};