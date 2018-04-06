import React, { Component } from 'react';
import { View, Text, ListView, Image } from 'react-native';
import firebase from 'firebase';
import ListItem from './ListItem';
import { Spinner } from './common';
import _ from 'lodash';

class MaterialList extends Component {
    state = { 
        dataSource:  new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
    };
    listener = firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/materialRequests`);

    componentDidMount() {
        this.listenForData(this.listener);
    }

    listenForData(listener){
        listener.on('value', (snap) => {

            let requests = [];
            requests = _.map(snap.val(), (val, uid) => {
                return {...val, uid};
            });
            _.reverse(requests);

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(requests)
            });
        });
    }

    renderRow(request){
        return(
            <ListItem request={request} />
        );
    }

    render(){
        console.log(this.state.dataSource);
        if (this.state.dataSource._cachedRowCount === 0) {
            return(
                <View style={styles.container}>
                    <View style={styles.noOrders}>
                        <Image 
                            source={require('./images/noOrders.png')}
                        />
                        <Text>
                            Click 'New' in the upper left corner to create an order.
                        </Text>
                    </View>
                </View>
            );
        }
        return(
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = {
    containter: {
        flex: 1
    },
    noOrders: {
        alignItems: 'center',
        flexGrow: 1,
        marginTop: 100,
        marginBottom: 25
    }
};

export default MaterialList;