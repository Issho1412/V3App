import React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        editable: true
    }
    render(){
        const {editable, hidden, handleChangesText, value, placeholder, keyboardType} = this.props;
        return(
            <TextInput style={styles.txtInput}
                placeholder={placeholder}
                value = {value}
                secureTextEntry={hidden}
                editable = {editable}
                placeholderTextColor = {paramColors.mainTextColor}
                onChangeText = {handleChangesText}
                keyboardType={keyboardType?keyboardType:"default"}
            />
        );
     };
}

const styles = StyleSheet.create({
    txtInput: {
       borderBottomColor: paramColors.mainTextColor,
       borderBottomWidth: 1,
       color: paramColors.mainTextColor,
       marginVertical: 10,
       width: paramValues.WIDTH* 0.8,    
    },
});