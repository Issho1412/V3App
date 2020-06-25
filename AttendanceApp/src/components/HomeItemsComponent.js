import React, {Component} from 'react';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';
import {
    Image,
    Text,
    StyleSheet, 
    View
} from 'react-native';

export default class HomeItemsComponent extends Component{
    render(){
        const {text, url} = this.props;
        return(
            <View style = {styles.container}>
                <Image source = {url} style={paramValues.styles.radius}/>
                <View style={styles.contxt}>
                    <Text style = {styles.txt}>{text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: paramColors.colorItemHome,
        borderRadius: paramValues.borderRadius,
        flexDirection: "row",
        marginVertical: '2.5%',
        padding: '5%',
        width: paramValues.WIDTH * 0.8,
    },
    contxt: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: '2.5%'
    },
    txt: {
        color: paramColors.colorWhite,
        fontWeight: 'bold',
        fontSize: paramValues.fontSize,
    }    
})