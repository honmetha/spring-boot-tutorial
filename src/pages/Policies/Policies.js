import React, { Component } from 'react'
import './Policies.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col } from 'antd'

export default class Policies extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Row type="flex" justify="center" className="Policies-Content">
            <Col xs={22} sm={22} md={20} lg={18}>
              <Row className="Policies-TextAlign">
                <h1>Maid Pro Service rules and policies</h1>
              </Row>
              <Row className="Policies-Description">
                We're committed to providing a secure and fair services for our users and maids. To support this commitment, we've put in place rules and policies that govern our expectations of users and maids, the actions we'll take to keep you safe, and how we'll protect you if something goes wrong.
              </Row>
              <Row type="flex" justify="center" className="Policies-Details">
                <Col>
                  <Row className="Policies-RuleHeaders">Privacy Policy</Row>
                  <Row className="Policies-MarginBottom">We recognize that you may be concerned about our use and disclosure of your personal information. Your privacy is very important to us, and the following will inform you of the information that we, Maid Pro Service, may collect from you, and how it is used. By using our website, www.maidproservices.com, you are accepting the practices described in this policy.</Row>
                  <Row className="Policies-RuleHeaders">Information Collection</Row>
                  <Row className="Policies-MarginBottom">We may collect non-personal information, such as a domain name and IP Address. The domain name and IP address reveals nothing personal about you other than the IP address from which you have accessed our site. We may also collect information about the type of Internet browser you are using, operating system, what brought you to our Website, as well as which of our Web pages you have accessed.</Row>
                  <Row className="Policies-MarginBottom">Additionally, if you communicate with us regarding our Website or our services, we will collect any information that you provide to us in any such communication.</Row>
                  <Row className="Policies-MarginBottom">We may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</Row>
                  <Row className="Policies-RuleHeaders">Information Use</Row>
                  <Row className="Policies-MarginBottom">We use the collected information primarily for our own internal purposes, such as providing, maintaining, evaluating, and improving our services and Website, fulfilling requests for information, and providing customer support.</Row>
                  <Row className="Policies-RuleHeaders">Security</Row>
                  <Row className="Policies-MarginBottom">We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it.</Row>
                  <Row className="Policies-MarginBottom">If we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page.</Row>
                  <Row className="Policies-MarginBottom">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</Row>
                </Col>
              </Row>
            </Col>
          </Row>
        <Footer />
      </div>
    )
  }
}
