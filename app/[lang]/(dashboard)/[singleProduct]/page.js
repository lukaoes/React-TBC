import SingleProdInfo from "@/components/SingleProduct/singleProdInfo"

export default async function SingleProduct({ params }) {
  const {lang} = params
  const {singleProduct} = params
  const prodId = Number(singleProduct)

  return (
    <SingleProdInfo prodId={prodId} lang={lang} />
  )
}
