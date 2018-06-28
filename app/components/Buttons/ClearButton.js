import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={require('./images/icon.png')} />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

export default ClearButton;