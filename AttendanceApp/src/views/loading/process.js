import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import paramColor from '../../constants/colors';

export default class App extends Component {
    render(){
        const {isLoading} = this.props;
        return (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color= {paramColor.colorGreen} animating = {isLoading}/>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
