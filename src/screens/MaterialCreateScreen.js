import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Input, CardSection, Card, MenuButton, Confirm } from '../components/common';

const INITIAL_STATE = { 
    po: '', job: '', locStreet: '', locCity: '', locState: '', locZip: '',
    item1: '', item2: '', item3: '', quantItem1: '', quantItem2: '', quantItem3: '',
    deliveryInstr: '', showModal: false
};

class MaterialCreateScreen extends Component {
    state = INITIAL_STATE;

    componentDidMount(){
        this.setState(INITIAL_STATE);
    }

    onButtonPress() {
        this.setState({ showModal: true })
    }

    firstWord(word) {
        let wordArray = word.split(" ")

        if (wordArray.length > 1){
            return `${wordArray[0]} ${wordArray[1]}`
        }
        return `${wordArray[0]}`;
    }

    onAccept() {
        const { currentUser } = firebase.auth();
        let date = new Date().toString();

        firebase.database().ref(`/users/${currentUser.uid}/materialRequests`)
            .push({
                date: date,
                orderName: this.state.orderName, 
                name: this.state.name, 
                locStreet: this.state.locStreet, 
                locCity: this.state.locCity, 
                locState: this.state.locState, 
                locZip: this.state.locZip,
                item1: this.state.item1,
                item2: this.state.item2,
                item3: this.state.item3,
                quantItem1: this.state.quantItem1,
                quantItem2: this.state.quantItem2,
                quantItem3: this.state.quantItem3
            });
        
        Actions.main({ type:'reset' });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    renderDate() {
        const today = new Date();
        date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

        return date;
    }

    render () {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <Text style={styles.dateStyle}>
                                Todays Date: {this.renderDate()}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="Order Name"
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
                        <CardSection style={{paddingBottom: 30, paddingTop: 20}}>
                            <MenuButton onPress={this.onButtonPress.bind(this)}>Submit</MenuButton>
                        </CardSection>

                        <Confirm
                            visible={this.state.showModal}
                            onAccept={this.onAccept.bind(this)}
                            onDecline={this.onDecline.bind(this)}
                        >
                            Are you sure you want to submit this request?
                        </Confirm>
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

export default MaterialCreateScreen;