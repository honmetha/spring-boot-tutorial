import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col, Icon, Drawer, Button} from 'antd'
import Logo from '../../images/maidProServiceLogo.png'

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
        <Row type="flex" align="middle" className="Navbar-Body">
          <Col span={4}>
            <a href="http://localhost:3000/">
              <img src={Logo} alt="" width="125" />
            </a>
          </Col>
          <Col span={20}>
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
                <Col>
                  <Button icon="home" className="Navbar-DrawerButtons">Home</Button>
                </Col>
                <Col>
                  <Button icon="search" className="Navbar-DrawerButtons">Search Maid</Button>
                </Col>
                <Col>
                  <Button icon="credit-card" className="Navbar-DrawerButtons">Payment</Button>
                </Col>
                <Col>
                  <Button icon="user" className="Navbar-DrawerButtons">About Us</Button>
                </Col>
                <Col>
                  <Button icon="login" className="Navbar-DrawerButtons">Login</Button>
                </Col>
                <Col>
                  <Button icon="user-add" className="Navbar-DrawerButtons">Register</Button>
                </Col>
                <Col>
                  <Button icon="usergroup-add" className="Navbar-DrawerButtons">Join As Maid</Button>
                </Col>
                <Col>
                  <Button icon="file-text" className="Navbar-DrawerButtons">Policy</Button>
                </Col>
              </Drawer>
            </Row>
            <Row type="flex" justify="end" className="Navbar-Menu">
              <Button className="Navbar-MenuButton">Home</Button>
              <Button className="Navbar-MenuButton">Search</Button>
              <Button className="Navbar-MenuButton">Payment</Button>
              <Button className="Navbar-MenuButton">About Us</Button>
              <Button className="Navbar-MenuButton">Login</Button>
              <Button className="Navbar-MenuButton">Register</Button>
              <Button className="Navbar-MenuButton">Join As Maid</Button>
              <Button className="Navbar-MenuButton">Policy</Button>
            </Row>
          </Col>
        </Row>
        <Row className ="Navbar-Border"></Row>
      </div>
    )
  }
}