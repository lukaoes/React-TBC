import SingleProdInfo from "@/components/SingleProduct/singleProdInfo"

// export async function generateStaticParams() {
//   const response = await fetch('https://dummyjson.com/products/');
//   const products = await response.json();

//   const paths = products.products.map((post) => ({
//     params: { singleProduct: post.id }
//   }))

//   return paths
// }

export default async function SingleProduct({ params }) {
  const {lang} = params
  const {singleProduct} = params
  const prodId = Number(singleProduct)

  return (
    <SingleProdInfo prodId={prodId} lang={lang} />
  )
}
