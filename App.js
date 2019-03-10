import React from 'react';
import { StyleSheet} from 'react-native';
import DrawerNavigator from './src/drawerNavigation/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
        <DrawerNavigator style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
});
