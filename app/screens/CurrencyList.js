import React, { Component } from 'react';
import { FlatList, Text, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

class CurrencyList extends Component {

    handlePress = () => {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={true}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default CurrencyList;