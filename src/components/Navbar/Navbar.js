import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col, Icon} from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Row className="Navbar-Main">
          <Col span={20}>
            <a href="http://localhost:3000/">
              <img src="maidProServiceLogo.png" alt="" width="125" />
            </a>
          </Col>
          <Col span={4}>
            <Row type="flex">
              <Icon type="search" className="Navbar-Icon" />
              <Icon type="menu" className="Navbar-Icon" />
            </Row>
          </Col>
        </Row>
        <Row className ="Navbar-Border"></Row>
      </div>
    )
  }
}
