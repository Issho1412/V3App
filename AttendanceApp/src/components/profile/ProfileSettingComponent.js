import React, {Component} from 'react';
import {
    Text, TextInput, StyleSheet,  TouchableOpacity, View
} from 'react-native';
import paramColors from '../../constants/colors';
import paramValues from '../../constants/default_data';

export default class ProfileMenuComponent extends Component{
    render(){
        const {nameSelection, url, editable, editText, placeholder} = this.props;
        return(
          <View style={styles.container} >
                <Text style={styles.txt}>{nameSelection}</Text>
                <TextInput style={styles.txtInput} placeholder = {placeholder} editable = {editable}/>
                <TouchableOpacity onPress = {url} style={styles.borderFormat}>
                    <Text style={styles.txtDanger}>{editText}</Text>
                </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    borderFormat: {
        borderBottomColor: paramColors.mainTextColor,
        borderBottomWidth: 1,
    },
    container: {
        flexDirection: "row", 
        marginVertical: 5
    },
    txt: {
        color: paramColors.colorTextSchedule,
        width: paramValues.WIDTH * 0.225,
        fontWeight: "700",
        fontSize: 13,
        marginVertical: 5,
    },
    txtInput: {
        borderBottomColor: paramColors.mainTextColor,
        borderBottomWidth: 1,
        padding: 0,
        width: paramValues.WIDTH * 0.5,
    },
    txtDanger: {
        color: paramColors.bgHeader,
        marginVertical: 5,
    }
});