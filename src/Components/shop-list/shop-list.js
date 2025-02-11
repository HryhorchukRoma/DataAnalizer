import React, { Component } from "react";
import { Row, Col, Select, Card, Typography } from "antd";

import "./shop-list.css";

const {Title} = Typography;

export default class ShopList extends Component {
  render() {
    return (
      <Card className="box-shadow">
        <Row className="list">
          <Col span="24">
          <Title level={5} className="list_title">Shop List</Title>
            <Select
              className="list_select"
              showSearch
              placeholder="Select"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "all",
                  label: "All",
                },
                {
                  value: "foggy",
                  label: "Foggy",
                },
                {
                  value: "tera",
                  label: "Tera",
                },
                {
                  value: "space",
                  label: "Space",
                },
                {
                  value: "megaStore",
                  label: "Mega Store",
                },
                {
                  value: "quickMart",
                  label: "Quick Mart",
                },
              ]}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}
