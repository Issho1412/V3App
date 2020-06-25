import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { loginUser, getSchedulesAll } from '../../redux/actions';
import Const from '../../constants/default_data';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import LogoTitleComponent from '../../components/LogoTitleComponent';
import TextInputComponent from '../../components/TextInputComponent';
import Valid from '../../functions/validateForm';
import Loading from '../../views/loading/process';

let cookie;
class Login extends Component{
    constructor (props){
        super(props);
        this.state = {
            isDisable: false,
            id_student : null,
            password : null,
            isLoading: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    handleKeyUpPassword = typedText => {
        this.setState({password: typedText});
    };
    handleKeyUpId = typedText => {
        this.setState({id_student: typedText});
    };
    handleLogin = () => {
        this.setState({isDisable: true});
        let semester = '55';
        let id = this.state.id_student;
        let pwd = this.state.password;
        let validCode = Valid.checkLogin(id, pwd);
        this.setState({isLoading: true});
        if(validCode === 0){
            this.props.loginUser(
                this.state.id_student,
                this.state.password,
                data => {
                    if(data.message === "success"){
                        cookie = data.cookie;
                        this.props.getSchedulesAll(cookie, 'hocKyId='+semester, 
                            data => {
                                if(data.message === "success"){
                                    this.setState({ isLoading: false });
                                    this.setState({ isDisable: false});
                                    this.props.navigation.navigate('Home');
                                }
                                else {
                                    console.log('get schedules all: error');
                                }
                            });
                    }
                    else {
                        this.setState({ isLoading: false});
                        this.setState({isDisable: false});
                        Valid.showAlert(3);
                    }
                }
            );
        }else {
            this.setState({isDisable: false});
            this.setState({isLoading: false});
            Valid.showAlert(validCode)
        };
    }
    
    handleForgotPwd = () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state !== nextState)
        { 
            return true;
        }
        return false;
    }

    render(){
        return(
            <View style={Const.styles.align}>
                <HeaderComponent textCenter = 'ĐĂNG NHẬP' {...this.props} isHide = {false}/>
                <LogoTitleComponent/>
                <View>
                    <TextInputComponent placeholder = 'Mã số sinh viên' keyboardType="number-pad"  value = {this.state.id_student} handleChangesText = {this.handleKeyUpId}/> 
                    <TextInputComponent placeholder = 'Mật khẩu' hidden={true} value = {this.state.password} handleChangesText = {this.handleKeyUpPassword}/> 
                    <TouchableOpacity style={{marginTop: 15}} onPress= {this.handleForgotPwd}>
                        <Text style={{color: '#1FB6FF', fontWeight: '900', fontFamily: 'RADIOLAND'}}>Quên mật khẩu</Text>
                    </TouchableOpacity>     
                </View>
                <ButtonComponent nameBtn={'Đăng nhập'} url={this.handleLogin} disable={this.state.isDisable}/>
                <Loading style={{marginTop: 20}} isLoading = {this.state.isLoading}  fnProress={() => { }}/>
            </View>
        );
    };
}

export default connect(
    null,
    {
        getSchedulesAll,
        loginUser
    }
)(Login);