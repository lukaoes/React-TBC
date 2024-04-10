import Loading from "../loading"
import dynamic from 'next/dynamic'
 
const DynamicSingleProduct = dynamic(() => import('../../components/SingleProduct/singleProdInfo'), {
  ssr: false,
  loading: <Loading />,
})

const SingleProduct = ({ params: {singleProduct} }) => {
  const prodId = Number(singleProduct)

  return (<DynamicSingleProduct prodId={prodId}  />)
}

export default SingleProduct