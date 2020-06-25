import React, {Component} from 'react';
import {Alert, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {getPositionRoom} from '../../redux/actions';
import paramColors from '../../constants/colors';
import paramValues from '../../constants/default_data';
import FormatData from '../../functions/solveData';
import HeaderComponent from '../../components/HeaderComponent';
import SchedulesComponent from '../../components/ScheduleItemsComponent';
import io from 'socket.io-client';
import Geolocation from '@react-native-community/geolocation';

let mDataSchedules = [];
let mReturn, cls;

class TodayLesson extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCounted: 0,
            isDisabled : null,
            isLoading: false,
            curDay: new Date('2020/11/10'),
            latfrom:0,
            lonfrom:0,
            latto:0,
            lonto:0,
            valid_metter:0,
            room:"",
            code:"",
            name:"",
            messages:""
        }
    }
    socket= io("https://api-schdule.herokuapp.com",{ forceNew: true})
    UNSAFE_componentWillMount(){
        let mcode = FormatData.getInfo(this.props.dataSchedules.dataAll.info, 1);
        let mname = FormatData.getInfo(this.props.dataSchedules.dataAll.info, 0);
        cls = FormatData.getInfo(this.props.dataSchedules.dataAll.info, 2);
        var curDay = parseInt(this.state.curDay.getDay())+1;
        mDataSchedules = this.props.dataSchedules.dataNAll.infoWeek;
        mReturn = FormatData.getDataCurrentDay(mDataSchedules, 'Thứ ' + curDay);
        this.setState({
            code:mcode,
            name:mname
        })
        //code = mcode
        //name = mname
    }
    componentDidMount(){
        Geolocation.getCurrentPosition((info)=>{
            console.log(info.coords.latitude);
            console.log(info.coords.longitude);
            this.setState({
                latfrom:info.coords.latitude,
                lonfrom:info.coords.longitude
            })
        });
    }
    UNSAFE_componentWillUpdate(){
        this.socket.on('messages',(message)=>{
            console.log(message);
            this.setState({
                messages:message
            })
            Alert.alert("thông báo",message);
        });
    }
    handleSendDataAttendance = (arr) => {
        if(arr.length == 2){
            return <View>
                <TouchableOpacity 
                    onPress = {() => {this.handleGetPostitionRoom(arr[1].room)}} 
                    disabled = {this.handleCheckDisable(FormatData.formatSection(arr[1].sectionLesson))}>
                    <SchedulesComponent 
                        code_class = {cls} 
                        day = {FormatData.formatStringDate(this.state.curDay)} 
                        lesson = {arr[1].LessonName} 
                        room = {arr[1].room}   time = {FormatData.formatSection(arr[1].sectionLesson)}/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress = {() => {this.handleGetPostitionRoom(arr[0].room)}} 
                    disabled = {this.handleCheckDisable(FormatData.formatSection(arr[0].sectionLesson))}>
                    <SchedulesComponent 
                        code_class = {cls} 
                        day = {FormatData.formatStringDate(this.state.curDay)} 
                        lesson = {arr[0].LessonName} 
                        room = {arr[0].room}   time = {FormatData.formatSection(arr[0].sectionLesson)}/>
                </TouchableOpacity>
            </View>      
        } 
        if(arr.length == 1){
            return <View>
                <TouchableOpacity 
                    onPress = {() => {this.handleGetPostitionRoom(arr[0].room)}} 
                    disabled = {this.handleCheckDisable(FormatData.formatSection(arr[0].sectionLesson))}>
                    <SchedulesComponent 
                        code_class = {cls} 
                        day = {FormatData.formatStringDate(this.state.curDay)} lesson = {arr[0].LessonName} 
                        room = {arr[0].room}   time = {FormatData.formatSection(arr[0].sectionLesson)}/>
                </TouchableOpacity>
            </View>      
        }     
    }

    handleCheckDisable = (section) => {
        var hours = parseInt(new Date().getHours());
        // if(hours >=8 && hours <= 11 && (section === '2-5' || section === '2-6')){
        //     return false;
        // }
        // if(hours >=13 && hours <= 17 && (section === '7-10')){
        //     return false;
        // }
        return false;
    }
    onSendinfo = () => {
        const {latfrom,lonfrom,latto,lonto,valid_metter,room,code,name} =this.state;
        this.socket.emit('join',{
            room,
            code,
            name,
            status:1,
            lat1:latfrom,
            lon1:lonfrom ,
            lat2:latto,
            lon2:lonto,
            validmetter:valid_metter},(err)=>{
            console.log('error : ', err);
            Alert.alert("thông báo",err);
        })
        this.socket.on('messages',(message)=>{
            console.log(message);
            this.setState({
                messages:message
            });
            if(message!== null || message !== '')
                Alert.alert("thông báo",message);
        });
    }

    handleGetPostitionRoom = (cRoom) =>{
        let room = FormatData.formatRoom(cRoom);
        if(room !== null || room !== ''){
            const {latto,lonto} =this.state
            console.log(latto,lonto);
            
            if (latto !== 0 && lonto!==0) {
                console.log("runnig");
                this.onSendinfo();
            }
            else{
                this.props.getPositionRoom(room, data => {
                    if(data.message === 'success'){   
                        const {lat,lon,vali_metter,class_name} = data.data
                        this.setState({
                            room:class_name,
                            latto:lat,
                            lonto:lon,
                            valid_metter:vali_metter
                        })
                       this.onSendinfo()
                    }
                    else {
                        Alert.alert('Notification', 'Systems is error!');
                    }
                 });
            }
           
        }
    }
    componentWillUnmount(){
        this.socket.disconnect()
        this.socket.off()
    }
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.messages !== this.state.messages){
            return true;
        }
        return false;
    }

    render(){
        return(
            <View>
                <HeaderComponent url = {()=> this.props.navigation.goBack()} {...this.props} isHide ={true}textCenter = 'MÔN HỌC HÔM NAY'/>
                <View style={[paramValues.styles.align, {marginVertical: 20}]}>
                    <Text  style={styles.txt}>Ngày hôm nay: {FormatData.formatStringDate(this.state.curDay)}</Text>
                </View>
                {
                    this.handleSendDataAttendance(mReturn)
                }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    txt: {
        color: paramColors.colorTextSchedule,
        fontWeight: "700",
        textDecorationLine: "underline",
    }
});

const mapStateToProps = state => ({
    dataSchedules: state.schedulesReducer
});

export default connect (
    mapStateToProps,
    {
        getPositionRoom
    }
)(TodayLesson);