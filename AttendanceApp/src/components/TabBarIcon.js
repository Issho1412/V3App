/**
 * Author: Phi Nam
 * Created: 2020-01-08
 * Description: 
 */
import React, {Component} from 'react';
import {Image} from 'react-native';

export default class TabBarIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image
        style={{width: 20, height: 20}}
        source={this.props.focused ? this.props.activesrc : this.props.src}
      />
    );
  }
}
