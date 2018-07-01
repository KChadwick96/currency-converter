import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = props => {
    const { buttonText, onPress, editable = true, textColor = null } = props;

    const containerStyles = [styles.container];
    if (!editable) containerStyles.push(styles.containerDisabled);

    const underlayColor = color(styles.$buttonBackgroundColorBase)
        .darken(styles.$buttonBackgroundColorModifier);

    const buttonTextStyles = [styles.buttonText];
    if (textColor) {
        buttonTextStyles.push({ color: textColor });
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={underlayColor}>
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
        </View>
    )
};

InputWithButton.propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    textColor: PropTypes.string
};

export default InputWithButton;