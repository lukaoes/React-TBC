import CampsiteLayout from "../../../../components/Campsite/campsiteLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import campsitesImage from "../../../../public/assets/images/secondHeader/addCampsite.jpg";

const Campsites = () => {
  return (
    <>
      <SecondHeader
        title="საკემპინგე ადგილები"
        backgroundImage={campsitesImage}
      />
      <CampsiteLayout />
    </>
  );
};

export default Campsites;
