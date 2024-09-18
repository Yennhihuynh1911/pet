import { Pagination, ProductCard } from "@/components"
import { products } from "@/constant/products"
import { Button, Card, Col, Flex, Input, Row } from "antd"

const DEFAULT_PAGINATION = 20

export default function Home({ searchParams }: { searchParams: any }) {
  const page = Number(searchParams?.page) || 1
  const productList = products || []
  const renderedProducts = productList.slice(
    DEFAULT_PAGINATION * page,
    DEFAULT_PAGINATION * page + DEFAULT_PAGINATION,
  )

  return (
    <div className="app-content">
      <div className="list-view">
        <div className="content">
          <Row gutter={[24, 24]}>
            {renderedProducts.map((product: any) => (
              <Col xs={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="footer">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
