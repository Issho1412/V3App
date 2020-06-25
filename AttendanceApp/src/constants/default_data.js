import {Dimensions, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT= Dimensions.get('window').height;

const styles = StyleSheet.create({
    align:{
        alignItems:"center",
        justifyContent: "center",
    },
    header:{
        alignItems: "center",
        backgroundColor: '#DA251C',
        height: HEIGHT * 0.25,
        justifyContent: "center",
        padding: 10,
    },
    radius: {
        borderRadius: 50,
    },
    txtProfile: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 13,
        textAlign: "center"
    },
});

export default {
    WIDTH, 
    HEIGHT,
    styles,
    borderRadius: 5,
    heightArrow: 20,
    fontSize: 16,
    fFamily: 'RADIOLAND',
    margin: 20,
    widthArrow: 20,
}