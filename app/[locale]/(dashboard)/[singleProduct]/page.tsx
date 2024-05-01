import SingleProdInfo from "../../../../components/SingleProduct/singleProdInfo"

interface SingleProductProps {
  params: {
    singleProduct: string;
  };
}

export default async function SingleProduct({ params }: SingleProductProps) {
  const {singleProduct} = params
  const prodId = Number(singleProduct)

  return (
    <SingleProdInfo prodId={prodId} />
  )
}
