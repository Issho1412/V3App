import React, {Component} from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity
} from 'react-native';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';

export default class ButtonComponent extends Component{
    render(){
        const {nameBtn, url, disable} = this.props;
        return(
            <TouchableOpacity onPress ={url} style={styles.btn} disabled={disable}>
                <Text style={styles.txt}>{nameBtn}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: paramColors.bgHeader,
        borderRadius: paramValues.borderRadius,
        color: '#fff',
        marginVertical: '10%',
        padding: '2.5%',
        width: paramValues.WIDTH - 250,
    },
    txt:{
        color: paramColors.colorWhite,
        textAlign: "center",
    }
});