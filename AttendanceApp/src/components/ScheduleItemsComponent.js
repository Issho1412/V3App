import React, {Component} from 'react';
import paramColors from '../constants/colors';
import paramValues from '../constants/default_data';
import {
    Image,
    Text,
    StyleSheet, 
    View
} from 'react-native';

export default class ScheduleItemsComponent extends Component{
    render(){
        const {code_class, day, lesson, room, time} = this.props;
        return(
            <View style = {styles.container}>
                <View style={styles.f_row}>
                    <Image source = {require('../assets/images/morning.png')} style = {styles.img}/>
                    <Text style = {[styles.txt, styles.txt_title]}>LESSON</Text>
                </View>
                <Text style={styles.txt}>Môn học: {lesson}</Text>
                <Text style={styles.txt}>Ngày: {day}</Text>
                <Text style={styles.txt}>Thời gian: {time}</Text>
                <View style = {styles.f_row}>
                    <Text style={[styles.txt, styles.row_child]}>Phòng: {room}</Text>
                    <Text style={[styles.txt, styles.row_child]}>Lớp: {code_class}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: paramColors.colorTextSchedule,
        borderBottomWidth: 2,
        height: paramValues.HEIGHT * 0.275,
        padding: '5%',
        marginHorizontal: 25
    },
    f_row: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        height: 55,
        resizeMode: "stretch",
        width: 55,
    },
    row_child: {
        flex: 1,
    },
    txt: {  
        color: paramColors.colorTextSchedule,
        fontWeight: "bold",
        marginVertical: '1.25%'
    },
    txt_title: {
        fontSize: 18,
        fontWeight: "700",
    }
})