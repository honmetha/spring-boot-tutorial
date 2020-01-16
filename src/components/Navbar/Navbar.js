import React, { Component } from 'react'
import './Navbar.css'
import {Row, Col, Icon, Drawer} from 'antd'
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";
import { GiBroom } from "react-icons/gi";
import { IoIosDocument } from "react-icons/io";

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
          <Col span={16}>
            <a href="http://localhost:3000/">
              <img src="maidProServiceLogo.png" alt="" width="125" />
            </a>
          </Col>
          <Col span={8}>
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
                <p><AiFillHome /> Home</p>
                <p><FaSearch /> Search Maid</p>
                <p><MdPayment /> Payment</p>
                <p><MdPerson /> About Us</p>
                <p><FiLogIn /> Login</p>
                <p><TiPlus /> Register</p>
                <p><GiBroom /> Join As Maid With Us</p>
                <p><IoIosDocument /> Policy</p>
              </Drawer>
            </Row>
          </Col>
        </Row>
        <Row className ="Navbar-Border"></Row>
      </div>
    )
  }
}
