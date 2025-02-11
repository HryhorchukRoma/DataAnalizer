import React, { Component } from "react";
import { Card } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fetchSalesData } from "../app-data/sales-chart-data";
import "./sales-chart.css";

export default class SalesChart extends Component {
  state = { chartOptions: null };

  async componentDidMount() {
    const chartOptions = await fetchSalesData();
    this.setState({ chartOptions });
  }

  render() {
    return (
      <Card className="box-shadow">
        {this.state.chartOptions && (
          <HighchartsReact highcharts={Highcharts} options={this.state.chartOptions} />
        )}
      </Card>
    );
  }
}
