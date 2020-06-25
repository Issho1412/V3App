import React, {Component} from 'react';
import {
    Text, StyleSheet, Image, View
} from 'react-native';
import paramColors from '../../constants/colors';

export default class ItemProfileComponent extends Component{
    render(){
        const {nameSelection, urlImg} = this.props;
        return(
          <View style={styles.container} >
              <Image style={styles.img} source = {urlImg}/>
              <Text style={styles.txt}>{nameSelection}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: paramColors.colorWhite,
        borderWidth: 1,
        flexDirection: "row", 
        marginVertical: '2.5%',
        padding: '2.5%',
        width: '80%',
    },
    txt: {
        color: paramColors.colorTextSchedule,
        fontWeight: "700",
    },
    img:{
        borderColor: paramColors.mainTextColor,
        borderWidth: 1,
        borderRadius: 50,
        height: 45,
        margin: '2.5%',
        width: 45
    }
});