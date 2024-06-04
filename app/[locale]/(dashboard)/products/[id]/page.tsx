import { getSingleProduct } from "../../../../../actions";
import SingleProdImageSlider from "../../../../../components/SingleProductPage/singleProdImageSlider";
import SingleProdNavigation from "../../../../../components/SingleProductPage/singleProdNavigation";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const prodId = params.id;
  const product = await getSingleProduct(prodId);
  const displayProd = product[0];
  console.log(displayProd);
  return (
    <div className="single-product-layout">
      <SingleProdNavigation
        titlege={displayProd.title_ge}
        titleen={displayProd.title_en}
        id={displayProd.id}
      />
      <div>
        <SingleProdImageSlider
          photos={displayProd.photo_urls}
          mainphoto={displayProd.main_photo}
        />
        <div>პროდუქტის მთავარი აღწერა</div>
        <div>იუზერის ინფორმაცია</div>
      </div>
      <div>დეტალები</div>
      <div>მსგავსი პროდუქცია</div>
    </div>
  );
};

export default SingleProductPage;
