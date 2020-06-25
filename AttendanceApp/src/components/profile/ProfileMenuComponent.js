import React, {Component} from 'react';
import {
    Text, StyleSheet, Image, View
} from 'react-native';
import paramColors from '../../constants/colors';

export default class ProfileMenuComponent extends Component{
    render(){
        const {nameSelection} = this.props;
        return(
          <View style={styles.container} >
              <Text style={styles.txt}>{nameSelection}</Text>
              <Image source = {require('../../assets/images/next.png')}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        margin: 12.5
    },
    txt: {
        color: paramColors.colorTextSchedule,
        flex: 2,
        fontWeight: "700",
    }
});