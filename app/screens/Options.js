import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 25;

class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func
    }

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {
        Linking.openURL('httasdp://ninja-labs.co.uk').catch(() => {
            this.props.alertWithType('error', 'Whoops!', 'Could not load URL :(');
        });
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text='Themes'
                    onPress={this.handleThemesPress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator />
                <ListItem
                    text='Ninja-labs.co.uk'
                    onPress={this.handleSitePress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);