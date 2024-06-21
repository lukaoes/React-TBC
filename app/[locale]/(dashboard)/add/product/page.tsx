import MainProductField from "../../../../../components/Add/Product/mainProductField";
import SecondHeader from "../../../../../components/layout/secondHeader";
import { getI18n } from "../../../../../locales/server";
import addProduct from "../../../../../public/assets/images/secondHeader/productss.webp";
const AddProduct = async () => {
  const t = await getI18n();
  return (
    <>
      <SecondHeader
        title={t("addProduct.addProduct")}
        backgroundImage={addProduct}
      />

      <h1 className="add-product-title">{t("addProduct.addYourProduct")}</h1>
      <MainProductField />
    </>
  );
};

export default AddProduct;
