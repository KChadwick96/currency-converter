import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, StyleSheet, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.state.containerImageWidth, height: this.state.containerImageWidth }
        ];

        const imageStyle = [
            styles.image,
            { width: this.state.imageWidth }
        ]

        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyle}>
                    <Animated.Image
                        source={require('./images/background.png')}
                        style={[StyleSheet.absoluteFill, containerImageStyle]}
                        resizeMode='contain'
                    />
                    <Animated.Image
                        source={require('./images/logo.png')}
                        style={imageStyle}
                        resizeMode='contain'
                    />
                </Animated.View>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;