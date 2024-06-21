import Image from "next/image";
import { Link } from "next-view-transitions";
import { CampsitesDisplay } from "../../types";
import { useCurrentLocale, useI18n } from "../../locales/client";

interface ICamp {
  campsite: CampsitesDisplay;
}

const RecentCampsitesCard = ({ campsite }: ICamp) => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const desc =
    locale === "ge"
      ? campsite.description
        ? campsite.description
        : campsite.descriptionen
      : campsite.descriptionen
      ? campsite.descriptionen
      : campsite.description;
  return (
    <div className="recent-campsites-card">
      <div>
        <Link href={`/campsites/${campsite.id}`}>
          <Image
            src={campsite.main_photo}
            alt={campsite.name}
            width={700}
            height={700}
          />
        </Link>
        <h2>
          {campsite.negotiable == true ? (
            <span>{t("camping.negotiable")}</span>
          ) : (
            <>
              ₾ {campsite.price}
              <span> / {t("main.perDay")}</span>
            </>
          )}
        </h2>
        <Link href={`/campsites/${campsite.id}`}>
          <h3>{campsite.name}</h3>{" "}
        </Link>
        <p>
          {desc.slice(0, 125)}
          {desc.slice().length > 125 ? "..." : ""}
        </p>
        <div className="recent-campsites-activities">
          {campsite.activities.map((act, index) => (
            <span key={`recent-campsites-activities-${index}`}>{act}</span>
          ))}
        </div>
        <Link
          href={`/campsites/${campsite.id}`}
          className="recent-camp-see-more"
        >
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
                fill="#ffa500"
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
          </svg>{" "}
          {t("main.seeMore")}
        </Link>
      </div>
    </div>
  );
};

export default RecentCampsitesCard;
