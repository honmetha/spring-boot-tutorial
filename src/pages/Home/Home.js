import React, { Component } from "react";
import { Layout, Menu, Card, Row, Col, Select, Input } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <span className="nav-text">เครื่องทั้งหมด</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span className="nav-text">เพิ่มเครื่องของลูกค้า</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <h3>เพิ่มเครื่องของลูกค้า</h3>
                <Card>
                  <Row>
                    <Col>
                      <Row>
                        <h3>ข้อมูลเครื่อง</h3>
                      </Row>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <p>รุ่น</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            onChange={handleChange}
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                              Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                          </Select>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <p>หมายเลขเครื่อง</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Input placeholder="Basic usage" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <p>ข้อมูลเครื่อง</p>
                  <p>รุ่น</p>
                  <p>หมายเลขเครื่อง</p>
                </Card>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}
