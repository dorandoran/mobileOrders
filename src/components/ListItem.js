import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress() {
        Actions.materialEdit({ request: this.props.request});
    }
    
    showDate(crazyDate) {
        let dataArray = crazyDate.split(" ");
        return `${dataArray[1]}  ${dataArray[2]} ${dataArray[3]}`
    }

    render () {
        const { orderName, date } = this.props.request;

        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress.bind(this)}
            >
                <View>
                    <Card>
                        <CardSection>
                            <Text style={styles.titleStyle}>
                                "{orderName}"
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.dateStyle}>
                                Ordered on {this.showDate(date)}
                            </Text>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
    },
    dateStyle: {
        flex: 1,
        textAlign: 'center'
    }
};

export default ListItem;