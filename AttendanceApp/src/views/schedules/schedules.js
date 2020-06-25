import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSchedulesAll } from '../../redux/actions';
import TabViewMain from '../../views/schedules/tab_elements/tab-view-main';
import HeaderComponent from '../../components/HeaderComponent';


import {
    StyleSheet, 
    View,
} from 'react-native';

class Schedules extends Component{
    constructor(props)
    { 
        super(props);    
        this.state = {
            indexTab: props.navigation.getParam('indexTab'),
        }
    }

    UNSAFE_componentWillMount(){
      //  console.log('Schedules: ', this.props.dataSchedules);
    }
    render(){   
        return(            
            <View style={styles.wrap}>
                <HeaderComponent {...this.props} url = {()=> this.props.navigation.navigate('Home')} isHide ={true} textCenter = 'THỜI KHÓA BIỂU'/>
                <TabViewMain {...this.props.dataSchedules}></TabViewMain>
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
        getSchedulesAll,
    }
)(Schedules);

const styles = StyleSheet.create({
   wrap:{
       flex: 1,
   }
})