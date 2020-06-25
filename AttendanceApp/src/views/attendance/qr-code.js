import React, {Component} from 'react';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import io from 'socket.io-client';
import {
    Alert, Text, View
} from 'react-native';

import Const from '../../constants/default_data';
import FormatData from '../../functions/solveData';
import TextInputComponent from '../../components/TextInputComponent';

let mcode, mname, fmSection, mmajor;
let socket = io("https://api-schdule.herokuapp.com",{ forceNew: true});
  class QRCode extends Component{
    constructor(props){
      super(props);
      this.state = {
        latfrom:0,
        lonfrom:0,
        latto:0,
        lonto:0,
        valid_metter:0,
        room:"",
      }
    }
    UNSAFE_componentWillMount(){
      mcode = FormatData.getInfo(this.props.items.dataAll.info, 1);
      mname = FormatData.getInfo(this.props.items.dataAll.info, 0);
      let msection = FormatData.getInfo(this.props.items.dataAll.info, 2);
      mmajor = FormatData.getInfo(this.props.items.dataAll.info, 3);
      fmSection = msection.substr(0, 2);
      this.setState({name: mname, code: mcode, section: fmSection, major: mmajor});
    }

    handleKeyUpRoom = typedText => {
      this.setState({room: typedText});
  };
    componentDidMount(){
      socket.on('message',(data)=>{
          console.log(data);
      });
    }

    render(){
        {
          console.log('code: ',mcode);
          console.log('major: ',mmajor);
          console.log('msection: ', fmSection);
          console.log('name: ', mname);
          console.log('mroom:', this.state.room);
        }
        const onsuccess=(e)=>{
            Alert.alert('Validate Checkin','Send your Info to Join Class',[
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => socket.emit('checkinByQRcode',{
              room:this.state.room,
              code,
              name,
              section,
              major,
              status:0},
              (err)=>{
                  Alert.alert('Error',err)
              }) }
            ],
            { cancelable: false }
            );
        }
        return(
            <View style={{flex:1}}>
              <QRCodeScanner onRead={onsuccess}/>
              <View style={[Const.styles.align]}>
                <TextInputComponent placeholder = 'Nhập phòng học (ex: H1)' value = {this.state.room} handleChangesText = {this.handleKeyUpRoom}/>  
              </View>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    items: state.schedulesReducer
  });
  
export default connect(
  mapStateToProps, 
  {}
)(QRCode);