import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'GBP';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79';
const TEMP_CONVERSION_RATE = 0.7;
const TEMP_CONVERSION_DATE = new Date();

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

    handleSwapCurrency = () => {

    };

    handleOptionsPress = () => {

    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior='padding'>
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
                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE}
                        date={TEMP_CONVERSION_DATE}
                    />
                    <ClearButton
                        text="Reverse Currencies"
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

export default Home;