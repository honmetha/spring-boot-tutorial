import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export default class Login extends Component {
  render() {
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={10} style={{textAlign: "end"}}>
          <img src="LoginPic.jpg" alt="Login" width="100%" />
        </Col>
        <Col span={10}>
          <Row>
            Username:
            <Input placeholder="Username" />
          </Row>
          <Row>
            Password:
            <Input placeholder="Password" />
          </Row>
          <Row>
            <Col>
              <Button type="primary">Login</Button>
              <Button type="danger">Create Account</Button>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
