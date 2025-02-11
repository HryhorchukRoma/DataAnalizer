import ShopList from "./Components/shop-list";
import SalesChart from "./Components/sales-chart";
import ProductTable from "./Components/product-table";
import SalesTable from "./Components/sales-table";
import ProductSalesTable from "./Components/product-sales";
import { Row, Col, Card } from "antd";

function App() {
  return (
    <>
      <Card>
        <Row>
          <Col span={24}>
            <ShopList />
          </Col>
        </Row>
      </Card>
      <Card>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} lg={12} key='1'>
            <SalesChart />
          </Col>
          <Col xs={24} sm={24} lg={12} key='2'>
            <ProductTable />
          </Col>
          <Col xs={24} sm={24} lg={12} key='3'>
            <SalesTable />
          </Col>
          <Col xs={24} sm={24} lg={12} key='4'>
            <ProductSalesTable />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default App;
