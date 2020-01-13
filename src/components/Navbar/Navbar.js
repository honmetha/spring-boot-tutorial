import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col} from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Row className="Navbar-Main">
          <Col span={20}>
            <img src="maidProServiceLogo.png" alt="" width="125" />
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row className ="Navbar-Border"></Row>
      </div>
    )
  }
}
