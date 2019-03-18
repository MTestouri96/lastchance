import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Designs from '../Desgins/Designs';
import Categorie from '../Components/Categorie';
import Menu from '../Components/Menu';
import Panier from '../Components/Panier';
import Headers from '../Components/Headers';

export default class MenuScreen extends Component {

    static navigationOptions = {
        title: 'Menu',
        headerStyle: {
            backgroundColor: '#ff6347',
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);
        this.state={
            recette: 0 ,
        }
    };

    render() {
        return (
            <View >
                <View style={Designs.container}>
                    <Headers navigation={this.props.navigation} />
                </View>
                <View style={Designs.container} flexDirection='row' justifyContent='flex-start' alignItems= 'flex-start'>
                    <View flexDirection='column' style={{ width: 500 }}>
                        <Categorie />
                        <Menu />
                    </View>
                    <Panier />
                </View>
            </View>
        );
    };
};