import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

export default () => {
    return (
        <Container>
            <StatusBar translucent={false} barStyle='light-content' />
            <Logo />
        </Container>
    )
}