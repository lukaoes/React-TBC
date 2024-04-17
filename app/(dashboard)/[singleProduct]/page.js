import SingleProdInfo from "@/components/SingleProduct/singleProdInfo"

export default async function SingleProduct({ params: {singleProduct} }) {
  const prodId = Number(singleProduct)

  return (
    <SingleProdInfo prodId={prodId} />
  )
}
