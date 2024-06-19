import Link from "next/link";
import { getScopedI18n } from "../../locales/server";
import Image from "next/image";
import pin from "../../public/assets/images/pin.png";

const HomeAbout = async () => {
  const t = await getScopedI18n("main");
  return (
    <div className="h">
      <div className="home-about-us">
        <h3>{t("whatEzoezoDoes")}</h3>
        <div className="home-about-us-container">
          <div className="home-about-us-types">
            <div>
              <Image src={pin} alt="pin" width={300} height={300} />
              <h4>{t("gear")}</h4>
              <p>{t("gearDesc")}</p>
              <Link href="/products">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_45_18679)">
                    <path
                      d="M9.395 2.84912L8.8129 3.50763L13.933 8.03367H0.5V8.91258H13.933L8.8129 13.4386L9.395 14.0971L15.5 8.7005V8.24575L9.395 2.84912Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_18679">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 0.973145)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {t("allGearProducts")}
              </Link>
            </div>
            <div>
              <Image src={pin} alt="pin" width={300} height={300} />
              <h4>{t("camping")}</h4>
              <p>{t("campingDesc")}</p>
              <Link href="/campsites">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_45_18679)">
                    <path
                      d="M9.395 2.84912L8.8129 3.50763L13.933 8.03367H0.5V8.91258H13.933L8.8129 13.4386L9.395 14.0971L15.5 8.7005V8.24575L9.395 2.84912Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_18679">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 0.973145)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {t("allCampingSites")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
