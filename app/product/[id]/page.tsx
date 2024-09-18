import { products } from "@/constant/products"

export default async function ProductDetail({
  params,
}: {
  params: { id: string }
}) {
  const productList = products
  return <div>{params.id}</div>
}
