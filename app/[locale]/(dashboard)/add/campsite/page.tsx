import MainCampsiteField from "../../../../../components/Add/Campsite/mainCampsiteField";
import SecondHeader from "../../../../../components/layout/secondHeader";
import addCampsite from "../../../../../public/assets/images/secondHeader/addCampsite.jpg";

const AddCampsite = () => {
  return (
    <div>
      <SecondHeader title={"სივრცის დამატება"} backgroundImage={addCampsite} />
      <h1 className="add-product-title">დაამატეთ თქვენი სივრცე</h1>
      <MainCampsiteField />
    </div>
  );
};

export default AddCampsite;
