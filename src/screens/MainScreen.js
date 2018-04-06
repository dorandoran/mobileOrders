import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuButton } from '../components/common';

class MainScreen extends Component {
    onMrfPress() {
        Actions.materials();
    }

    onPastPress() {
        
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.buttonStyle}>
                    <MenuButton onPress={this.onMrfPress.bind(this)}>Materials Request Form</MenuButton>
                </View>

                <View style={styles.buttonStyle}>
                    <MenuButton onPress={this.onPastPress.bind(this)}>Button 2</MenuButton>
                </View>

                <View style={styles.buttonStyle}>
                    <MenuButton>Button 3</MenuButton>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    buttonStyle: {
        flex: 1,
        padding: 30,
    }
};
export default MainScreen;