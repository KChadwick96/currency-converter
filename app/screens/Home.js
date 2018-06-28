import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'GBP';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79';

class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('base');
    };

    handlePressQuoteCurrency = () => {
        console.log('quote');
    };

    handleTextChange = text => {
        console.log(text);
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType='numeric'
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    defaultValue={TEMP_QUOTE_PRICE}
                />
                <ClearButton text="Reverse Currencies" />
            </Container>
        )
    }
}

export default Home;