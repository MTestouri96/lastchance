import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Designs from '../Desgins/Designs';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            USERNAME: '',
            PASSWORD: '',
            pswrdable: true,
        }
    };
    
    checkingLogin = () => {
        if (this.state.USERNAME == "" && this.state.PASSWORD == "") {
            this.props.navigation.navigate("Screen2");
        } else {
            alert('Username or Password is invalid');
        }
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={Designs.container} behavior='position'>
                    <View style={Designs.container} >
                        <Text style={Designs.txtttl}>MaCaisse</Text>
                        <Image style={{ height: 300, width: 300, borderRadius: 50, }}
                            source={require('../Data/Pictures/pizza.png')} />
                        <Text style={Designs.txt}>Username:</Text>
                        <TextInput placeholder="Username"
                            style={Designs.txtin}
                            onChangeText={(USERNAME) => this.setState({ USERNAME })} />
                        <Text style={Designs.txt}>Password:</Text>
                        <TextInput placeholder="Password"
                            style={Designs.txtin}
                            secureTextEntry={this.state.pswrdable}
                            onChangeText={(PASSWORD) => this.setState({ PASSWORD })} />
                        <TouchableOpacity style={Designs.logbtn}
                            onPress={this.checkingLogin}>
                            <Text style={Designs.txtbtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    };
}