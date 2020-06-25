import React, {Component} from 'react';
import {StyleSheet, 
    Text, View
} from 'react-native';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import ProfileSettingComponent from '../../components/profile/ProfileSettingComponent';
import paramColors from '../../constants/colors';
import paramValues from '../../constants/default_data';

class ProfileSetting extends Component{
    constructor (props){
        super(props);
        this.state = {
            full_name: 'Bosarlino Kizaru',
            my_classes: '12THC',
            id_student: '1765655',
            mayjor: 'IT'
        }
    }
    UNSAFE_componentWillMount() {
        let data = this.props.dataSchedules.dataAll;
        let stringFormat = data.info.split(" - ");
        this.setState({full_name: stringFormat[0]});
        this.setState({id_student: stringFormat[1]});
        this.setState({my_classes: stringFormat[2]});
        this.setState({mayjor: stringFormat[3]});
    }
    shouldComponentUpdate(nextProps, nextState){
        /*if(this.state.number !== nextState.number)
        {   console.log('state number count');
            return true;
        }
        console.log('false');*/
        return true;
    }

    render(){
        return(
            <View>
                <HeaderComponent url = {()=> this.props.navigation.goBack()} {...this.props} textCenter = 'CÀI ĐẶT'/>
                <View style={paramValues.styles.header}>
                    <View style={styles.border}>
                        <Text style={[paramValues.styles.txtProfile, styles.title]}>{this.state.full_name}</Text>
                        <Text style={paramValues.styles.txtProfile}>{this.state.my_classes}</Text>
                        <Text style={paramValues.styles.txtProfile}>{this.state.id_student}</Text>
                        <Text style={paramValues.styles.txtProfile}>{this.state.mayjor}</Text>   
                    </View>
                </View>
                <View style={styles.setting}>
                    <ProfileSettingComponent
                        nameSelection = 'MSSV'
                        editable = {false}
                        placeholder = {this.state.id_student.substring(6)}
                    />
                    <ProfileSettingComponent
                        nameSelection = 'ĐIỆN THOẠI'
                        editable = {false}
                        placeholder = '63*****54'
                        editText = 'Change'
                    />
                    <ProfileSettingComponent
                        nameSelection = 'MẬT KHẨU'
                        editable = {false}
                        placeholder = '*********'
                        editText = 'Change'
                    />
                    <ProfileSettingComponent
                        nameSelection = 'LỚP'
                        editable = {false}
                        placeholder = {this.state.my_classes.substring(6)}
                    />
                </View>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    dataSchedules: state.schedulesReducer,
});
export default connect(
    mapStateToProps,
    {
        
    }
)(ProfileSetting);

const styles = StyleSheet.create({
    border: {
        borderRadius: paramValues.borderRadius,
        borderWidth: 1.5,
        borderColor: paramColors.colorWhite,
        padding: 10
    },
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
        width: paramValues.WIDTH * 0.2,
    },
    title: {
        fontSize: 20
    },
    txt: {
        marginVertical: 10,
        width: paramValues.WIDTH * 0.2
    },
    setting: {
        margin: 20,
    }
    
})
