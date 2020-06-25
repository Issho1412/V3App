import { convertSpeed } from "geolib";
import React from 'react';
import {View} from 'react-native';
import SchedulesItemComponent from '../components/ScheduleItemsComponent';

function addDays(sday, num) {
    let dateObj = new Date(sday);
    let copy = new Date(dateObj);
    copy.setDate(dateObj.getDate() + 7*num);
    return copy;
}

function checkAmOrPm(mhour){
    if(mhour >= 13 && mhour <= 18){
        return 'PM';
    }
    if(mhour >= 8 && mhour <= 11){
        return 'AM';
    }
}

function formatStringDate(date){
    let mDay = parseInt(date.getDate());
    let mMonth = parseInt(date.getMonth()) + 1;
    let mYear = date.getFullYear();
    return  mMonth + '/' + mDay + '/' + mYear;
}
function formatRoom (string){
    let isFormat = string[0] + string[string.length-1];
    return isFormat;
}
function formatSection (string){
    let isFormat;
    let size = string.length;
    let isParse = parseInt(string.substr(size-2, 2));
    if(isParse >= 10 && isParse < 12){
        isFormat = string[4] + '-' + string.substr(size-2, 2);
    }
    else isFormat = string[4] +'-'+ string.substr(size-1, 1);
    return isFormat;
}

function getDataCurrentDay(arrWeek, currentDay){
    let mArrDataCurrent = [];
    removeItemNull(arrWeek);
    if(arrWeek.length > 0){
        for(var i = 0; i  < arrWeek.length; i++){
            let index = arrWeek[i].date;
            if (index == currentDay){
                mArrDataCurrent.push(arrWeek[i]);
                continue;
            }
        }
    }
    return mArrDataCurrent;
}
function getWeek(cday, sday){
    let temp, mArrDay = [];
    let dayCom = new Date(cday);
    for(var i = 1; i <= 23; i++){
        if(dayCom >= addDays(sday, i-1) && dayCom < addDays(sday, i)){
            temp = addDays(sday, i-1);
            for(var j = 0; j < 6; j++){
                mArrDay.push(new Date(temp));
                temp.setDate(temp.getDate() + 1);
            }
            return {'hocKyId': i, mArrDay};
            break;
        }
    }
}


function getInfo(str, index){
    let frmat = str.split(' - ');
    if(index == 0){
        return frmat[0];
    }
    if(index == 1 || index == 2){
        return frmat[index].substr(6);
    }
    if(index == 3){
        return frmat[index].substr(8);
    }
}

function showItemSchedule(arr, string, str_day){
    if(arr.length == 2){
        return <View>
            <SchedulesItemComponent code_class = {string} day = {str_day} lesson = {arr[1].LessonName} 
            room = {arr[1].room}   time = {formatSection(arr[1].sectionLesson)}/>
            <SchedulesItemComponent code_class = {string} day = {str_day} lesson = {arr[0].LessonName} 
            room = {arr[0].room}   time = {formatSection(arr[0].sectionLesson)}/>
        </View>
    }
    if(arr.length == 1){
        return <SchedulesItemComponent code_class = {string} day = {str_day} lesson = {arr[0].LessonName} 
                room = {arr[0].room} time = {formatSection(arr[0].sectionLesson)}/>
    }
    return <View/>
}

function removeItemNull(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].date === " " || arr[i].date ===  null){
            arr.splice(i, 1);
            
        }
    }
    return arr;
}
export default {
    addDays,
    checkAmOrPm,
    getDataCurrentDay,
    getInfo,
    getWeek,
    formatStringDate,
    formatRoom,
    formatSection,
    showItemSchedule,
    removeItemNull
}