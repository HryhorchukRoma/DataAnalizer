import React, { Component } from "react";
import { Table, Card } from 'antd';
import { getSalesData } from "../app-data/sales-table-data";
import "./sales-table.css";

const columns = [
  { 
    title: 'Product IDs', 
    dataIndex: 'products', 
    key: 'products', 
    sorter: (a, b) => a.products.localeCompare(b.products),
  },
  { 
    title: 'Date', 
    dataIndex: 'date', 
    key: 'date', 
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  { 
    title: 'Check Amount', 
    dataIndex: 'amount', 
    key: 'amount', 
    sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
    render: (text) => `$${text-1}.99`,
  },
];

export default class SalesTable extends Component {
  state = { salesData: [] };

  async componentDidMount() {
    const data = await getSalesData();
    this.setState({ salesData: data });
  }

  render() {
    const { salesData } = this.state;

    return (
      <Card title="Sales Table" className="box-shadow">
        <p><b>Sales List</b></p>
        <Table columns={columns} dataSource={salesData} pagination={{ pageSize: 5 }} rowKey="id" />
        <p><b>Total Sales: {salesData.length}</b></p>
      </Card>
    );
  }
}
