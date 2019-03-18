import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Designs from '../Desgins/Designs';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
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
                <View style={Designs.container} justifyContent='space-around'>
                    <View flexDirection='column'>
                        <View flexDirection='row'>
                            <TouchableOpacity style={Designs.tchblop}
                                onPress={() => (this.props.navigation.navigate('Screen3'))}>
                                <Image style={{ height: 250, width: 250, borderRadius: 25, }}
                                    source={require('../Data/Pictures/menu.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Designs.tchblop}>
                                <Image style={{ height: 250, width: 250, borderRadius: 25, }}
                                    source={require('../Data/Pictures/clients.png')} />
                            </TouchableOpacity>
                        </View>
                        <View flexDirection='row'>
                            <TouchableOpacity style={Designs.tchblop}>
                                <Image style={{ height: 250, width: 250, borderRadius: 25, }}
                                    source={require('../Data/Pictures/fournisseur.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Designs.tchblop}
                                onPress={() => (this.props.navigation.navigate('Screen3', { passedData: this.state.recette }))}>
                                <Image style={{ height: 250, width: 250, borderRadius: 25, }}
                                    source={require('../Data/Pictures/historique.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    };
}