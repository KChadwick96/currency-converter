import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ text, selected, onPress }) => (
    <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func
};

export default ListItem;