import React, {Component} from 'react';
import s from './style'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s.homeStyle}></div>
    )
  }
}