import React, { Component } from 'react'
import './LoginPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col, Input, Icon, Button, Divider } from 'antd'

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center">
          <Col>
            <Row type="flex" justify="center">
              <img src="maidProServiceLoginLogo.png" alt="" width="200" className="LoginPage-Logo" />
            </Row>
            <Row className="LoginPage-Input">
              <Input
                placeholder="username"
                prefix={<Icon type="user" className="LoginPage-UsernamePrefix" />}
              />
            </Row>
            <Row className="LoginPage-Input">
              <Input.Password placeholder="password" />
            </Row>
            <Row type="flex" justify="end" className="LoginPage-ForgetPassword">
              <a href="http://localhost:3000/">forget password?</a>
            </Row>
            <Row type="flex" justify="center">
              <Button className="LoginPage-LoginButton">Login</Button>
            </Row>
            <Row>
              <Divider>or</Divider>
            </Row>
            <Row type="flex" justify="center">
              <Button className="LoginPage-CancelButton">Create account</Button>
            </Row>
          </Col>
        </Row>
        <div className="LoginPage-Footer">
          <Footer />
        </div>
      </div>
    )
  }
}
