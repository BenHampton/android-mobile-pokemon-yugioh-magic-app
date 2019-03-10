import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../Navigation/MenuButton';
import PokedexComponent from "../Pokedex/PokedexComponent";
import {HeaderView} from "../Header/HeaderView";

class PokeApiScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderView />
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Look Up Pokémon</Text>
        <View>
          <PokedexComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});
export default PokeApiScreen;

// justifyContent: 'center'   -> centers tag in middle of page
