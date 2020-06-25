import React, {Component} from 'react';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';
import {
    Image,
    Text,
    StyleSheet, 
    View
} from 'react-native';

export default class HeaderComponent extends Component{
    render(){
        const {text, } = this.props;
        return(
            <View style={styles.container}>
                <Image source = {require('../assets/images/app_icon.png')}
                    style = {styles.img}
                />
                <Text style={styles.text}> VIDO CLASS </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: '10%'
    },
    img: {
        height: 90,
        width: 90,
    },
    text: {
        color: paramColors.orangeMain,
        fontSize: paramValues.fontSize
    }
})