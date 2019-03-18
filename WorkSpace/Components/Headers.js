import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Headers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recette: 10,
        };
    };

    render() {
        return (
            <View flexDirection='row' alignItems='center' justifyItems='space-between'>
                <Text>Solde: {this.state.recette} €</Text>
                <View flexDirection='row'>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen3') }}>
                            <View flexDirection='column' >
                                <Image style={{ height: 50, width: 50, borderRadius: 25, }}
                                    source={require('../Data/Pictures/menu.png')} />
                                <Text>Menu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen4') }}>
                            <View flexDirection='column' >
                                <Image style={{ height: 50, width: 50, borderRadius: 25, }}
                                    source={require('../Data/Pictures/clients.png')} />
                                <Text>Clients</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen5') }}>
                            <View flexDirection='column' >
                                <Image style={{ height: 50, width: 50, borderRadius: 25, }}
                                    source={require('../Data/Pictures/fournisseur.png')} />
                                <Text>Fournisseurs</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen6') }} >
                            <View flexDirection='column' >
                                <Image style={{ height: 50, width: 50, borderRadius: 25, }}
                                    source={require('../Data/Pictures/historique.png')} />
                                <Text>Historique</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
};