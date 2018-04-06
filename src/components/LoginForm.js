import React, {Component} from 'react';
import { 
    KeyboardAvoidingView, 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StatusBar,
    Keyboard
} from 'react-native';
import { Input, Spinner, Button, CardSection } from './common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component{
    state = { email: '', password:'', loading: false, loggedIn: null };

    onButtonPress() {
        const { email, password } = this.state;

        Keyboard.dismiss();
        
        this.setState({ loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }

    renderButton() {
        if (this.state.loading) {
             return <Spinner size="small"/>;
          }
    
          return (
             <Button
                onPress={this.onButtonPress.bind(this)}
                style={styles.buttonContainer}
            >
                Log in
             </Button>
         );
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
        });
        Actions.main();
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false,
            password: ''
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <View style={styles.input}>
                    <Input 
                        label="Email"
                        placeholder="sample@email.com"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        keyboardType='email-address'
                        returnKeyType='next'
                        autoCapitalize={'none'}
                    />
                </View>
                <View style={styles.input}>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        returnKeyType='go'
                        onSubmitEditing={this.onButtonPress.bind(this)}
                    />
                </View>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#F44336',
        padding: 5,
        paddingVertical: 10,
        marginBottom: 10
    },
    buttonLoginText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '400'
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    }
});