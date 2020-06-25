import React, {Component} from 'react';
import {Animated, View, Image, StyleSheet} from 'react-native';
import paramColor from '../constants/colors';

export default class Splash extends Component{
    state = {
        iconOpacity: new Animated.Value(0),
    }
    async componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.iconOpacity,{
                duration: 2000,
                toValue: 1,
                useNativeDriver: true 
            }),
        ]).start(() => {
            this.props.navigation.navigate('Login');
        })
    }
    
    shouldComponentUpdate(){

    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.Image
                    source={require('../assets/images/logo_two.png')}
                    style = {{... styles.logo, opacity: this.state.iconOpacity}}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: paramColor.orangeMain,
        flex: 1,
        justifyContent: "center", 
    },
    logo: {
        height: 180,
        resizeMode: "stretch",
        width: 180,
    }
})