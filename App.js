import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './WorkSpace/Screens/LoginScreen';
import HomeScreen from './WorkSpace/Screens/HomeScreen';
import HistoriqueScreen from './WorkSpace/Screens/HistoriqueScreen';
import MenuScreen from './WorkSpace/Screens/MenuScreen';

const RootStack = createAppContainer(createStackNavigator({
  Screen1: { screen: LoginScreen },
  Screen2: { screen: HomeScreen },
  Screen3: { screen: MenuScreen },


  Screen6: { screen: HistoriqueScreen },

}));
export default RootStack;

class App extends Component {
  constructor(props) {
    super(props);
  }
};