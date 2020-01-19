import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './RegistrationMaid.css'
import { Row, Col, Input, Icon, Button } from 'antd';
import { MdLockOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default class RegistrationMaid extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center">
          <Col>
            <Row type="flex" justify="center">
              <img src="maidProServiceLoginLogo.png" alt="" width="200" className="RegistrationMaid-Logo" />
            </Row>
            <Row type="flex" justify="center" className="RegistrationMaid-RegisterText">
              Register Maid
            </Row>
            <Row className="RegistrationMaid-Input">
              <Input
                placeholder="username"
                prefix={<Icon type="user" className="RegistrationMaid-UsernamePrefix" />}
              />
            </Row>
            <Row className="RegistrationMaid-Input">
              <Input.Password
                placeholder="password"
                prefix={<MdLockOutline className="RegistrationMaid-PasswordPrefix" />}
              />
            </Row>
            <Row className="RegistrationMaid-Input">
              <Input
                placeholder="email"
                prefix={<AiOutlineMail className="RegistrationMaid-EmailPrefix" />}
              />
            </Row>
            <Row type="flex" justify="center">
              <Button className="RegistrationMaid-LoginButton">Submit</Button>
            </Row>
            <Row type="flex" justify="center">
              <Button className="RegistrationMaid-CancelButton">Cancel</Button>
            </Row>
          </Col>
        </Row>
        <div className="RegistrationMaid-Footer">
          <Footer />
        </div>
      </div>
    )
  }
}
