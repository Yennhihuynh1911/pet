"use client"
import { Card } from "antd"
import { useRouter } from "next/navigation"

export const ProductCard = ({ product }: { product: any }) => {
  const { push } = useRouter()
  return (
    <Card
      hoverable
      style={{ width: 240, border: "1px solid var(--color-neutral-100)" }}
      cover={
        <img
          alt={`product-${product?.id}`}
          src={product?.img}
          width={240}
          height={240}
          style={{
            border: "1px solid var(--color-neutral-100)",
          }}
        />
      }
      onClick={() => push(`/product/${product?.id}`)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "120px",
        }}
      >
        <div style={{ fontWeight: 600 }}>{product?.name}</div>
        <div style={{ color: "#ef4444", fontWeight: 500 }}>
          {product?.price}
        </div>
      </div>
    </Card>
  )
}
