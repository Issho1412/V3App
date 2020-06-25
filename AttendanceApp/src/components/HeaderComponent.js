import React, {Component} from 'react';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';
import {
    Image,
    Text,
    TouchableOpacity,
    StyleSheet, 
    View
} from 'react-native';

export default class HeaderComponent extends Component{
    render(){
        const {text, url, textCenter, isHide} = this.props;
        return(
            <View style = {styles.container}>
                {
                    isHide ?
                    <TouchableOpacity onPress={url} style={{flex: 3.5}}>
                        <Image
                            style = {styles.image}
                            source = {require('../assets/images/previous_1.png')}/>
                    </TouchableOpacity>:
                    <View style={{flex: 3.5}}/>
                }
            
                <View style={{flexDirection: "column"}}>
                    <Text style={styles.textCenter}>{textCenter}</Text>
                </View>
                <TouchableOpacity style={{flex: 3.5}}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: paramColors.bgHeader,
        height: 55,
        flexDirection: "row",
        padding: 15,
        width: paramValues.width
    },
    image: {
        height: paramValues.heightArrow,
        width: paramValues.widthArrow,
    },
    text: {
        color: paramColors.colorTextHeader,
        fontSize: paramValues.fontSize,
        fontFamily: paramValues.fFamily,
        fontWeight: "700",
        textAlign: "right",
    },
    textCenter:{
        borderBottomColor: '#E67E0F',
        borderBottomWidth: 4,
        color: paramColors.colorTextHeader,
        flex: 3,
        fontSize: paramValues.fontSize + 2,
        fontFamily: paramValues.fFamily,
        fontWeight: "700",
        textAlign: "center",
        paddingHorizontal: 10,
    }
})