import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Registration.css'
import { Row, Col, Input, Icon, Button } from 'antd';
import { MdLockOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default class Registration extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center">
          <Col>
            <Row type="flex" justify="center">
              <img src="maidProServiceLoginLogo.png" alt="" width="200" className="Registration-Logo" />
            </Row>
            <Row type="flex" justify="center" className="Registration-RegisterText">
              Register
            </Row>
            <Row className="Registration-Input">
              <Input
                placeholder="username"
                prefix={<Icon type="user" className="Registration-UsernamePrefix" />}
              />
            </Row>
            <Row className="Registration-Input">
              <Input.Password
                placeholder="password"
                prefix={<MdLockOutline className="Registration-PasswordPrefix" />}
              />
            </Row>
            <Row className="Registration-Input">
              <Input
                placeholder="email"
                prefix={<AiOutlineMail className="Registration-EmailPrefix" />}
              />
            </Row>
            <Row type="flex" justify="center">
              <Button className="Registration-LoginButton">Submit</Button>
            </Row>
            <Row type="flex" justify="center">
              <Button className="Registration-CancelButton">Cancel</Button>
            </Row>
          </Col>
        </Row>
        <div className="Registration-Footer">
          <Footer />
        </div>
      </div>
    )
  }
}
