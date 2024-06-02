import MainProductField from "../../../../../components/Add/Product/mainProductField";
import SecondHeader from "../../../../../components/layout/secondHeader";
import addProduct from "../../../../../public/assets/images/secondHeader/addProduct.png";
const AddProduct = () => {
  return (
    <>
      <SecondHeader title={"პროდუქტის დამატება"} backgroundImage={addProduct} />

      <h1 className="add-product-title">დაამატეთ თქვენი პროდუქცია</h1>
      <MainProductField />
    </>
  );
};

export default AddProduct;
