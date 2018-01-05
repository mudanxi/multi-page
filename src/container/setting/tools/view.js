import React, {Component} from 'react';
import s from './style'

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={s.setting}>
        <h2>系统工具</h2>
      </div>
    )
  }
}
