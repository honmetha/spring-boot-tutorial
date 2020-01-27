import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col, Icon, Drawer, Button} from 'antd'
import Logo from '../../images/maidProServiceLogo.png'
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={Logo} alt="" width="125" />
            </Link>
          </Col>
          <Col span={20}>
            <Row type="flex" justify="end">
              <Icon type="search" className="Navbar-Icon" onClick={this.handleModalVisible}/>
              <Icon type="menu" className="Navbar-Icon" onClick={this.showDrawer} />
              <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <Link to="/">
                  <Col>
                    <Button icon="home" className="Navbar-DrawerButtons">Home</Button>
                  </Col>
                </Link>
                <Link to="/search/:option">
                  <Col>
                    <Button icon="search" className="Navbar-DrawerButtons">Search Maid</Button>
                  </Col>
                </Link>
                <Link to="/payment">
                  <Col>
                    <Button icon="credit-card" className="Navbar-DrawerButtons">Payment</Button>
                  </Col>
                </Link>
                <Link to="/aboutus">
                  <Col>
                    <Button icon="user" className="Navbar-DrawerButtons">About Us</Button>
                  </Col>
                </Link>
                <Link to="/login">
                  <Col>
                    <Button icon="login" className="Navbar-DrawerButtons">Login</Button>
                  </Col>
                </Link>
                <Link to="/register">
                  <Col>
                    <Button icon="user-add" className="Navbar-DrawerButtons">Register</Button>
                  </Col>
                </Link>
                <Link to="/register/maid">
                  <Col>
                    <Button icon="usergroup-add" className="Navbar-DrawerButtons">Join As Maid</Button>
                  </Col>
                </Link>
                <Link to="/">
                  <Col>
                    <Button icon="file-text" className="Navbar-DrawerButtons">Policy</Button>
                  </Col>
                </Link>
              </Drawer>
            </Row>
            <Row type="flex" justify="end" className="Navbar-Menu">
              <Link to="/">
                <Button className="Navbar-MenuButton">Home</Button>
              </Link>
              <Link to="/search/:option">
                <Button className="Navbar-MenuButton">Search</Button>
              </Link>
              <Link to="/payment">
                <Button className="Navbar-MenuButton">Payment</Button>
              </Link>
              <Link to="/aboutus">
                <Button className="Navbar-MenuButton">About Us</Button>
              </Link>
              <Link to="/login">
                <Button className="Navbar-MenuButton">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="Navbar-MenuButton">Register</Button>
              </Link>
              <Link to="/register/maid">
                <Button className="Navbar-MenuButton">Join As Maid</Button>
              </Link>
              <Link to="/">
                <Button className="Navbar-MenuButton">Policy</Button>
              </Link>
            </Row>
          </Col>
        </Row>
        <Row className="Navbar-Border" />
      </div>
    )
  }
}