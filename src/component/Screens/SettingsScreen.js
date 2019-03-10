import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../Navigation/MenuButton';
import {HeaderView} from "../Header/HeaderView";
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderView />
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

export default SettingsScreen;
