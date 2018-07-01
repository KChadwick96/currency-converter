import React, { Component } from 'react';
import { View, Text, Keyboard, StyleSheet, Platform, Animated } from 'react-native';
import PropTypes from 'prop-types';
import posed from 'react-native-pose';

import styles from './styles';

class Logo extends Component {

    static propTypes = {
        tintColor: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            keyboardOpen: false
        };

        const toLargeTransition = ({ value, toValue, useNativeDriver }) => {
            return Animated.timing(value, {
                toValue,
                useNativeDriver,
                duration: 200
            });
        };
        const toSmallTransition = ({ value, toValue, useNativeDriver }) => {
            return Animated.timing(value, {
                toValue,
                useNativeDriver,
                duration: 300
            });
        };

        const containerAnimationConfig = {
            large: {
                width: styles.$largeContainerSize,
                height: styles.$largeContainerSize,
                transition: toLargeTransition
            },
            small: {
                width: styles.$smallContainerSize,
                height: styles.$smallContainerSize,
                transition: toSmallTransition
            }
        };

        const imageAnimationConfig = {
            large: {
                width: styles.$largeImageSize,
                transition: toLargeTransition
            },
            small: {
                width: styles.$smallImageSize,
                transition: toSmallTransition
            }
        };

        this.posedLogoContainer = posed.View(containerAnimationConfig);
        this.posedLogoBackground = posed.Image(containerAnimationConfig);
        this.posedImage = posed.Image(imageAnimationConfig);
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            () => this.setState({ keyboardOpen: true }),
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            () => this.setState({ keyboardOpen: false }),
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        const imageStyle = [
            styles.image,
            this.props.tintColor ? { tintColor: this.props.tintColor } : null
        ];

        const PosedLogoContainer = this.posedLogoContainer;
        const PosedLogoBackground = this.posedLogoBackground;
        const PosedLogo = this.posedImage;

        const poseState = this.state.keyboardOpen ? 'small' : 'large';

        return (
            <View style={styles.container}>
                <PosedLogoContainer style={styles.containerImage} initialPose='large' pose={poseState}>
                    <PosedLogoBackground
                        initialPose='large'
                        pose={poseState}
                        source={require('./images/background.png')}
                        style={[StyleSheet.absoluteFill, styles.containerImage]}
                        resizeMode='contain'
                    />
                    <PosedLogo
                        initialPose='large'
                        pose={poseState}
                        source={require('./images/logo.png')}
                        style={imageStyle}
                        resizeMode='contain'
                    />
                </PosedLogoContainer>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;