import React from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends React.Component {

    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={ () => this.props.navigation.navigate(nav) }>
               <Text style={ styles.link }>{text}</Text>
            </TouchableOpacity>
        )
    } 

    render(){
        return(
            <View style={ styles.container }>
               <View style={styles.topLink}>
                  <Text style={styles.text}>MenuDrawer Component Top Half</Text>
               </View>
               <View style={styles.bottomLink}>
                   <Text>Bottom Half Of Menu Drawer</Text>
                   {this.navLink('PokeApiScreen', 'PokeApi')}
                   {this.navLink('Links', 'Links')}
                   {this.navLink('Settings', 'Settings')}
               </View>
            </View>
        )
    }

}
export default MenuDrawer;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    topLink: {
        height: 150,
        backgroundColor: 'black'
        
    },
    bottomLink: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 1,
        paddingBottom: 450
        
    },
    text: {
       color: 'white', 
       marginTop: 50,
       marginLeft: 30
    }
});
