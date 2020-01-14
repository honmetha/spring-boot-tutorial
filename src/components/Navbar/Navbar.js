import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col, Icon, Drawer} from 'antd'

export default class Navbar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Row className="Navbar-Main">
          <Col span={18}>
            <a href="http://localhost:3000/">
              <img src="maidProServiceLogo.png" alt="" width="125" />
            </a>
          </Col>
          <Col span={6}>
            <Row type="flex" justify="end">
              <Icon type="search" className="Navbar-Icon" />
              <Icon type="menu" className="Navbar-Icon" onClick={this.showDrawer} />
              <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <p>Home</p>
                <p>Search Maid</p>
                <p>Payment</p>
                <p>About Us</p>
                <p>Login</p>
                <p>Register</p>
                <p>Join As Maid With Us</p>
                <p>Policy</p>
              </Drawer>
            </Row>
          </Col>
        </Row>
        <Row className ="Navbar-Border"></Row>
      </div>
    )
  }
}
