import { getCampsitesDisplay } from "../../../../actions";
import CampsiteLayout from "../../../../components/Campsite/campsiteLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import { getI18n } from "../../../../locales/server";
import campsitesImage from "../../../../public/assets/images/secondHeader/camping.webp";

const Campsites = async () => {
  const displayCamps = await getCampsitesDisplay();
  const t = await getI18n();
  return (
    <>
      <SecondHeader
        title={t("camping.campingSites")}
        backgroundImage={campsitesImage}
      />
      <CampsiteLayout displayCamps={displayCamps} />
    </>
  );
};

export default Campsites;
