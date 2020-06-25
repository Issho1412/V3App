import React, {Component} from 'react';
import { StyleSheet, 
    Text, View, Image
} from 'react-native';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import paramColors from '../../constants/colors';
import paramValues from '../../constants/default_data';
import FormatData from '../../functions/solveData';
import ItemProfileComponent from '../../components/profile/ItemProfileComponent';

class ProfileMenu extends Component{
    constructor (props){
        super(props);
        this.state = {
            full_name: 'Bosarlino Kizaru',
            my_classes: '12THC',
            id_student: '1765655',
            mayjor: 'IT',
            semester_start: ''
        }
    }

    UNSAFE_componentWillMount() {
        let data = this.props.dataSchedules.dataAll.info;
        let sdate = this.props.dataSchedules.dataAll.startHK;
        this.setState({full_name: FormatData.getInfo(data, 0)});
        this.setState({id_student: FormatData.getInfo(data, 1)});
        this.setState({my_classes: FormatData.getInfo(data, 2)});
        this.setState({mayjor: FormatData.getInfo(data, 3)});
        this.setState({semester_start: sdate});
    }
    handleHelp = () => {
        this.props.getPositionRoom(
            '/C7',
            data => {
            if(data){
                console.log('get position: is success');
            }
        })
       // this.props.navigation.navigate('ProfileSetting');
    }
    handleProfileMenu = () => {
        this.props.navigation.navigate('ProfileSetting');
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render(){
        return(
            <View>
                <HeaderComponent url = {()=> this.props.navigation.navigate('Home')} {...this.props} isHide ={true} textCenter = 'THÔNG TIN'/>
                <View style={paramValues.styles.header}>
                    <Image source = {require('../../assets/images/icon_profile.png')} style={styles.img}/>
                    <Text style={[paramValues.styles.txtProfile, styles.title]}>{this.state.full_name}</Text>
                </View>
                <View style={[paramValues.styles.align, {marginVertical: '5%'}]}>
                    <ItemProfileComponent nameSelection = {'Lớp: ' + this.state.my_classes} 
                        urlImg = {require('../../assets/images/icon_class.png')}/>
                    <ItemProfileComponent nameSelection = {'Nghành: ' + this.state.mayjor}
                        urlImg = {require('../../assets/images/icon_major.png')}/>
                    <ItemProfileComponent nameSelection = {'Ngày bắt đầu: ' + this.state.semester_start}
                        urlImg = {require('../../assets/images/icon_semester.png')}/>
                    <ItemProfileComponent nameSelection = {'MSSV: ' + this.state.id_student}
                        urlImg = {require('../../assets/images/icon_id_student.png')}/>
                </View>
            </View>
        );
    };
}
const mapStateToProps = state => ({
    dataSchedules: state.schedulesReducer
});
export default connect(
    mapStateToProps,
    {
        
    }
)(ProfileMenu);

const styles = StyleSheet.create({
    container: {
        backgroundColor: paramColors.bgContentMain,
    },
    img: {
        height: paramValues.HEIGHT * 0.15,
        marginBottom: '2.5%',
        resizeMode: "stretch",
        width: paramValues.WIDTH * 0.275,
    },
    title: {
        fontSize: 20
    },
    txt: {
        color: paramColors.colorWhite,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    }
})
