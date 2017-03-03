import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div className="main">
	      {this.props.children}
      </div>
    );
  }
}