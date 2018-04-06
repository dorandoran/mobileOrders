import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Input, CardSection, Card, MenuButton } from '../components/common';

class MaterialEditScreen extends Component {
    state = this.props.request;

    onButtonPress() {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/materialRequests/${this.state.uid}`)
            .set(this.state)
            .then(() => Actions.main({ type:'reset' }));
    }

    renderDate() {
        const today = new Date();
        date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

        return date;
    }

    firstWord(word) {
        let wordArray = word.split(" ")

        if (wordArray.length > 1){
            return `${wordArray[0]} ${wordArray[1]}`
        }
        return `${wordArray[0]}`;
    }

    render () {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <Text style={styles.dateStyle}>
                                Order Date: {this.state.date}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="PO#"
                                value={this.state.orderName}
                                onChangeText={text => this.setState({ orderName: text })}
                            />
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Text style={styles.titles}>Delivery Information</Text>
                        </CardSection>
                        <CardSection>
                            <Input
                                label='Name'
                                value={this.state.name}
                                onChangeText={text => this.setState({ name: text })}
                                />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Street'
                                value={this.state.locStreet}
                                onChangeText={text => this.setState({ locStreet: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='City'
                                value={this.state.locCity}
                                onChangeText={text => this.setState({ locCity: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='State'
                                value={this.state.locState}
                                onChangeText={text => this.setState({ locState: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Zip'
                                value={this.state.locZip}
                                onChangeText={text => this.setState({ locZip: text })}
                            />
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Text style={styles.titles}>Item Information</Text>
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Item 1'
                                value={this.state.item1}
                                onChangeText={text => this.setState({ item1: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label={this.firstWord(this.state.item1) + ' Quantity'}
                                value={this.state.quantItem1}
                                onChangeText={text => this.setState({ quantItem1: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Item 2'
                                value={this.state.item2}
                                onChangeText={text => this.setState({ item2: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label={this.firstWord(this.state.item2) + ' Quantity'}
                                value={this.state.quantItem2}
                                onChangeText={text => this.setState({ quantItem2: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Item 3'
                                value={this.state.item3}
                                onChangeText={text => this.setState({ item3: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label={this.firstWord(this.state.item3) + ' Quantity'}
                                value={this.state.quantItem3}
                                onChangeText={text => this.setState({ quantItem3: text })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label='Special Instructions'
                                value={this.state.deliveryInstr}
                                onChangeText={text => this.setState({ deliveryInstr: text })}
                            />
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <MenuButton onPress={this.onButtonPress.bind(this)}>Save Changes</MenuButton>
                        </CardSection>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titles: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dateStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    }
}


export default MaterialEditScreen;