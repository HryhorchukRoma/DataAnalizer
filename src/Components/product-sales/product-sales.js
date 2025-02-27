import React, { Component } from "react";
import { Table, Card } from 'antd';
import { getProductSalesData } from "../app-data/product-sales-data";
import "./product-sales.css";

const columns = [
  { 
    title: 'Product Name', 
    dataIndex: 'name', 
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  { 
    title: 'Price', 
    dataIndex: 'price', 
    key: 'price',
    sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
    render: (text) => `${text}`,
  },
];

export default class ProductSalesTable extends Component {
  state = {
    productsData: [],
  };

  async componentDidMount() {
    const data = await getProductSalesData();
    const formattedData = data.map(item => ({
      id: item.id,        
      name: item.name,   
      price: `$${item.price-1}.99`,  
    }));
    this.setState({ productsData: formattedData });
  }

  render() {
    const { productsData } = this.state;

    return (
      <Card title="Product Table" className="box-shadow">
        <p><b>Product List</b></p>
        <Table 
          columns={columns} 
          dataSource={productsData} 
          pagination={{ pageSize: 5 }} 
        />
        <p><b>Total Products: {productsData.length}</b></p>
      </Card>
    );
  }
}
