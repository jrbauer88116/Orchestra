import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from "react-native";

import style from './style'

const Menu = class Menu extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.welcome}>Welcome</Text>
                <Text style={style.text}>Welcome to the Orchestra project. This is a boilerplate React Native app that you can utilize to quickly start building your next project.</Text>
            </View>
        )
    }
}

export default Menu