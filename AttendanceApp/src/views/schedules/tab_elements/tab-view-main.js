import React from 'react';
import {
    StyleSheet, 
    View,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import paramValues from '../../../constants/default_data';
import paramColors from '../../../constants/colors';
import FormatData from '../../../functions/solveData';

export default function TabViewMain(props){
    let hk_start = props.dataAll.startHK;
    let str = hk_start.substr(4,3) + hk_start.substr(1,3) + hk_start.substr(7,4);
    let arrDays = FormatData.getWeek('11/11/2019', str).mArrDay; // all days in current week 
    let mdata = FormatData.removeItemNull(props.dataNAll.infoWeek);// remove element with date: null
    let cls = FormatData.getInfo(props.dataAll.info, 2);// get code class - 11THC
    var activeTabIndex = 0;
    let md = [], td = [], wd = [], trd = [], fd = [], std = []; // array to contain element getDate()

    if (props.index) {
        activeTabIndex = props.index;
    }  
    const [index, setIndex] = React.useState(activeTabIndex); 
    const [routes] = React.useState([
        { key: 'MD', title: 'T2' },
        { key: 'TD', title: 'T3' },
        { key: 'WD', title: 'T4'},
        { key: 'TSD', title: 'T5'},
        { key: 'FD', title: 'T6'},
        { key: 'STD', title: 'T7'},
    ]);   
    
    for(let i = 0; i < mdata.length; i++){
        let index = mdata[i].date;
        switch(index){
            case 'Thứ 2': {
                md.push(mdata[i]);
                break;
            }
            case 'Thứ 3': {
                td.push(mdata[i]);
                break;
            }
            case 'Thứ 4': {
                wd.push(mdata[i]);
                break;
            }
            case 'Thứ 5': {
                trd.push(mdata[i]);
                break;
            }
            case 'Thứ 6': {
                fd.push(mdata[i]);
                break;
            }
            case 'Thứ 7': {
                std.push(mdata[i]);
                break;
            }
            default :{
                break;
            }
        }
    }
    const MondayRoute = () => (
        FormatData.showItemSchedule(md,cls, FormatData.formatStringDate(arrDays[0])));
    const TuesdayRoute = () => (
        FormatData.showItemSchedule(td,cls, FormatData.formatStringDate(arrDays[1])));
    const WednesdayRoute = () => (
        FormatData.showItemSchedule(wd,cls, FormatData.formatStringDate(arrDays[2])));
    const ThursdayRoute = () => (
        FormatData.showItemSchedule(trd,cls, FormatData.formatStringDate(arrDays[3])));
    const FridayRoute = () => (
        FormatData.showItemSchedule(fd,cls, FormatData.formatStringDate(arrDays[4])));
    const SaturdayRoute = () => (
        FormatData.showItemSchedule(std,cls, FormatData.formatStringDate(arrDays[5])));    
    const  renderScene = SceneMap({
        MD: MondayRoute,
        TD: TuesdayRoute,
        WD: WednesdayRoute,
        TSD: ThursdayRoute,
        FD: FridayRoute,
        STD: SaturdayRoute
    });

    return(    
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={paramValues.WIDTH}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    activeColor= {paramColors.bgHeader}
                    indicatorStyle={{ backgroundColor: paramColors.orangeMain}}
                    style={[{backgroundColor: paramColors.colorTextHeader, height: '8.5%', }]}        
                    inactiveColor= {paramColors.colorTextSchedule}
                    labelStyle={{fontSize: 14}}
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
})