import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, 
    Text, TouchableOpacity, View
} from 'react-native';
import { connect } from 'react-redux';
import { getSchedules } from '../redux/actions';
import HomeItemsComponent from '../components/HomeItemsComponent';
import Loading from '../views/loading/process';

import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';
import RNMockLocationDetector from 'react-native-mock-location-detector';
import GetWeek from '../functions/solveData';



class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            isLoading: true,
           
        }
    }
 
    componentDidMount(){
        //mock location 
        RNMockLocationDetector.checkMockLocationProvider(
            "Mock Location Detected",
            "Please remove any mock location app first to continue using this app.",
            "I Understand"
          )
       

             
    }
   
    UNSAFE_componentWillMount() {
        let cookie = this.props.dataLogin.session;
        let hk_start = this.props.dataSchedules.dataAll.startHK;
        let str = hk_start.substr(4,3) + hk_start.substr(1,3) + hk_start.substr(7,4);
       
        const week = GetWeek.getWeek('11/11/2019', str).hocKyId;
        console.log('week now: ', week);
        this.props.getSchedules(cookie, 'hocKyId=55&&tuanHoc='+week, data => {
            if(data.message == 'success'){
                this.setState({isLoading:false});
            }
            else this.setState({isLoading:true});
        });
        
    }
    handleCreateStudent = () => {
        this.props.navigation.navigate('CreateStudent');
    }
    handleSchedules = () => {
        this.props.navigation.navigate('Schedules');
    }
    handleTodayLesson = () =>{
        this.props.navigation.navigate('TodayLesson');
    }
    handleHome = () => {
        var mname =  GetWeek.getInfo(this.props.dataSchedules.dataAll.info, 0);
        var mcode =  GetWeek.getInfo(this.props.dataSchedules.dataAll.info, 1);
    }
    
    handleProfile = () => {
        this.props. navigation.navigate('Profile');
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state !== nextState)
           return true;
        else return false;
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.txt}>VIEN DONG COLLEGE</Text>
                    <Image source = {require('../assets/images/vido_logo.png')} style={styles.img}/>
                </View>
                {
                    this.state.isLoading ?(<Loading isLoading = {this.state.isLoading}  fnProress={() => { }}/>):
                    (<View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginLeft: '1%'}}>
                        <TouchableOpacity onPress = {this.handleSchedules}>
                            <HomeItemsComponent
                                url = {require('../assets/images/schedule.png')}
                                text = {'Thời khóa biểu'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.handleCreateStudent}>
                            <HomeItemsComponent
                                url = {require('../assets/images/class_icon_1.png')}
                                text = {'Xác nhận'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleTodayLesson}>
                            <HomeItemsComponent
                                url = {require('../assets/images/attendance_icon.png')}
                                text = {'Điểm danh'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.handleProfile}>
                            <HomeItemsComponent
                                url = {require('../assets/images/acc.png')} 
                                text = {'Thông tin'} />
                        </TouchableOpacity>
                    </View>)
                }
            </ScrollView>
        );
    };
}

const mapStateToProps = state => ({
    dataSchedules: state.schedulesReducer,
    dataLogin : state.userReducer,
});
export default connect(
    mapStateToProps,
    {
        getSchedules,
    }
)(Home);

const styles = StyleSheet.create({
    container: {
        backgroundColor: paramColors.bgContentMain,
    },
    header: {
        alignItems: "center",
        backgroundColor: paramColors.bgHeader,
        height: paramValues.HEIGHT * 0.25,
        marginBottom: 20,
        padding: 10,
        width: paramValues.WIDTH,
    },
    img: {
        height: paramValues.HEIGHT * 0.15,
        resizeMode: "stretch",
        width: paramValues.WIDTH * 0.275,
    },
    txt: {
        color: paramColors.colorWhite,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    }
})
//onPress = {() => this.setState (state => ({number: state.number+1}))}>