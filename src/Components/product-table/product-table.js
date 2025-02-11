import React, { Component } from "react";
import { Card } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getProductTableData } from "../app-data/product-table-data";
import "./product-table.css";

export default class ProductTable extends Component {
  state = { data: [] };

  async componentDidMount() {
    const data = await getProductTableData();
    this.setState({ data });
  }

  render() {
    const options = {
      chart: { type: "pie" },
      title: { text: "Product Sales Distribution" },
      tooltip: {
        formatter: function () {
          return `<b>${this.point.name}</b><br>Sales Amount: ${this.y}<br>${this.point.customTooltip}`;
        }
      },
      series: [{ name: "Sales Share", data: this.state.data }]
    };

    return (
      <Card className="box-shadow">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    );
  }
}
