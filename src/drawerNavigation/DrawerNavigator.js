import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import PokeApiScreen from '../component/Screens/PokeApiScreen'
import YuGiOhScreen from '../component/Screens/YuGiOhScreen';
import SettingsScreen from '../component/Screens/SettingsScreen';
import MenuDrawer from '../component/Navigation/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.70,
    contentComponent: ({navigation}) => {
        return (
            <MenuDrawer navigation={ navigation } />
        )
    }
};

const DrawerNavigator = createDrawerNavigator(
    {
        YuGiOhScreen: { screen: YuGiOhScreen },
        PokeApiScreen: { screen: PokeApiScreen },
        Settings: { screen: SettingsScreen}
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);
