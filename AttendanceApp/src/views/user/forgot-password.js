import React, {Component} from 'react';
import {View} from 'react-native';
import Const from '../../constants/default_data';
import HeaderComponent from '../../components/HeaderComponent';
import LogoTitleComponent from '../../components/LogoTitleComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Valid from '../../functions/validateForm';

export default class ForgotPassword extends Component{
    constructor (props){
        super(props);
        this.state = {
            email : null,
        }
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }

    handleKeyupForgotPassword = typedText => {
        this.setState({email: typedText});
    };
    handleForgotPassword = () => {
        let xEmail = this.state.email
        let codeResult = Valid.checkValidEmail(xEmail);
        if(codeResult === 0){
            console.log('Email is valid');
        }
        else Valid.showAlert(codeResult);
        //this.props.navigation.navigate('Home');
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        return(
            <View style={Const.styles.align}>
                <HeaderComponent {...this.props} url = {()=> this.props.navigation.goBack()} textCenter = 'Quên Mật Khẩu'/>
                <LogoTitleComponent/>
                <View style={{padding: '1.5%', marginHorizontal: 25}}>
                    <TextInputComponent placeholder = 'Email' value = {this.state.email} handleChangesText = {this.handleKeyupForgotPassword}/> 
                </View>
                <ButtonComponent nameBtn={'Xác nhận'} url={this.handleForgotPassword}/>
            </View>
        );
    };
}