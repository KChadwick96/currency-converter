import { StatusBar } from 'react-native';
import { createStackNavigator, c } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const homeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options'
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes'
        }
    }
}, { headerMode: 'screen' });

const currencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title
        })
    }
});

const stackNavigatorOptions = {
    mode: 'modal',
    headerMode: 'none'
};

export default createStackNavigator({
    Home: {
        screen: homeStack
    },
    CurrencyList: {
        screen: currencyListStack
    }
}, stackNavigatorOptions);