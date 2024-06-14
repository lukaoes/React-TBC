import { getCampsitesDisplay } from "../../../../actions";
import CampsiteLayout from "../../../../components/Campsite/campsiteLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import campsitesImage from "../../../../public/assets/images/secondHeader/camping.png";

const Campsites = async () => {
  const displayCamps = await getCampsitesDisplay();
  return (
    <>
      <SecondHeader
        title="საკემპინგე ადგილები"
        backgroundImage={campsitesImage}
      />
      <CampsiteLayout displayCamps={displayCamps} />
    </>
  );
};

export default Campsites;
