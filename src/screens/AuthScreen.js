import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from '../components/LoginForm';

class AuthScreen extends Component {
    loggedIn = () => {
        this.props.navigation.navigate('main');
    }

    render () {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../components/images/mobileOrders.png')}
                    />
                </View>

                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} style={styles.formContainer}>
                    <LoginForm loggedIn={this.loggedIn}/>
                </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#0d528d'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        marginTop: 100
    },
    formContainer: {
        marginBottom: 150
    }
};

export default AuthScreen;