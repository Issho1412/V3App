import React, {Component} from 'react';
import {ScrollView, View, AsyncStorage, Alert, Text} from 'react-native';
import { connect } from 'react-redux';
import { createStudent, getSchedulesAll } from '../../redux/actions';
import FormatData from '../../functions/solveData';
import Const from '../../constants/default_data';

import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import LogoTitleComponent from '../../components/LogoTitleComponent';
import TextInputComponent from '../../components/TextInputComponent';

class CreateStudent extends Component{
    constructor (props){
        super(props);
        this.state = {
            className: '',
            code: '',
            isDisabled: null, 
            major: '',
            name: '',
            section: '',
        }
    }

    UNSAFE_componentWillMount(){
        var data = this.props.dataSchedules.dataAll.info;
        this.setState({className: FormatData.getInfo(data, 2)});
        this.setState({code: FormatData.getInfo(data, 1)});
        this.setState({major: FormatData.getInfo(data, 3)});
        this.setState({name: FormatData.getInfo(data, 0)});
        this.setState({section: FormatData.getInfo(data, 2).substr(0,2)});
    }
    handleCreateStudent = () => {
        this.setState({isDisabled: true});
        this.props.createStudent(
            this.state.code, this.state.name, this.state.className, this.state.section, this.state.major,
            data => {
                if(data.status === '200'){
                    Alert.alert('Amount', 'User has send verify');
                }
                else if(data.status === '500'){
                    Alert.alert('Amount', 'User has existed');
                }
                       
            }
        );
    }

    handleGetItem = async () => {
        var x = await AsyncStorage.getItem('index');
        console.log('x: ', x);
        return x;
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state !== nextState)
        { 
            return true;
        }
    }

    render(){
        return(
            <ScrollView>
                <HeaderComponent textCenter = 'Xác nhận sinh viên' {...this.props} url = {()=> this.props.navigation.goBack()} />
                <LogoTitleComponent/>
                <View style={Const.styles.align}>
                    <TextInputComponent value ={'MSSV: ' + this.state.code} editable ={false} style={{color: '#000'}}/> 
                    <TextInputComponent value ={'Họ và tên: ' + this.state.name} editable = {false}/> 
                    <TextInputComponent value ={'Lớp học: ' + this.state.className} editable = {false}/>
                    <TextInputComponent value ={'Khóa học: ' + this.state.section} editable = {false}/>     
                    <TextInputComponent value ={'Nghành: ' + this.state.major} editable = {false}/>  
                    <ButtonComponent nameBtn={'Xác nhận'} url={this.handleCreateStudent} disable = {this.state.isDisabled}/>
                </View>
                <Text/>
            </ScrollView>
        );
    };
}
const mapStateToProps = state => ({
    dataSchedules: state.schedulesReducer
});

export default connect(
    mapStateToProps,
    {
        createStudent,
        getSchedulesAll,
    }
)(CreateStudent);