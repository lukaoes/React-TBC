import SingleProdInfo from "@/components/SingleProduct/singleProdInfo"
import { Suspense } from "react"
import Loading from "../loading"

const SingleProduct = ({ params: {singleProduct} }) => {
  const prodId = Number(singleProduct)

  return (
    <Suspense fallback={<Loading />}>
      <SingleProdInfo prodId={prodId} />
    </Suspense>
  )
}

export default SingleProduct