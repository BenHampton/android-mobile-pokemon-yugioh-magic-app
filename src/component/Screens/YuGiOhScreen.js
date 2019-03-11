import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../Navigation/MenuButton';
import {YuGiOhHeaderView} from "../Header/YuGiOhHeaderView";
import MonsterComponent from "../Monster/MonsterComponent";

class YuGiOhScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <YuGiOhHeaderView />
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>Yu-Gi-Oh</Text>
            <View>
                <MonsterComponent monsterBrand={'Yu-Gi-Oh'} apiName={'YGOPRODeck API'}/>
            </View>
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

export default YuGiOhScreen;
