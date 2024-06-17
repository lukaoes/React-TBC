import MainCampsiteField from "../../../../../components/Add/Campsite/mainCampsiteField";
import SecondHeader from "../../../../../components/layout/secondHeader";
import { getI18n } from "../../../../../locales/server";
import addCampsite from "../../../../../public/assets/images/secondHeader/addCampsite.jpg";

const AddCampsite = async () => {
  const t = await getI18n();
  return (
    <div>
      <SecondHeader
        title={t("addCampsite.addCampsite")}
        backgroundImage={addCampsite}
      />
      <h1 className="add-product-title">{t("addCampsite.addYourCampsite")}</h1>
      <MainCampsiteField />
    </div>
  );
};

export default AddCampsite;
