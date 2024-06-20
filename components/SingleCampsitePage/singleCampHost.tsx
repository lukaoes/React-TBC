import Image from "next/image";
import { Link } from "next-view-transitions";
import { Campsite } from "../../types";
import { FC } from "react";
import { getNicknameAction, getPictureAction } from "../../actions";
import { getScopedI18n } from "../../locales/server";

interface ICamp {
  camp: Campsite;
}

const SingleCampHost: FC<ICamp> = async ({ camp }) => {
  const nickname = await getNicknameAction(camp.user_id);
  const pic = await getPictureAction(camp.user_id);
  const t = await getScopedI18n("singleCamp");
  return (
    <div>
      <div className="single-camp-welcome">
        <div className="single-camp-welcome-child">
          <span>{t("guests")}</span>
          <div className="single-camp-icons">
            <span
              className={
                !camp.accepted_guests.includes("tent") ? "welcome-none" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="#455A64"
                width="36"
                height="36"
              >
                <path d="M97.274 81.656H2.051A2.047 2.047 0 010 79.612c0-1.14.914-2.053 2.05-2.053h95.224a2.048 2.048 0 110 4.097M48.435 33.176c9.208 0 39.386 33.36 46.3 41.139-7.134-18.38-32.087-53.606-45.046-54.41-12.962-.809-37.91 35.536-45.057 54.273 6.712-8.074 34.642-41.002 43.803-41.002"></path>
                <path d="M48.435 35.233c-7.152 0-31.344 27.217-41.856 39.82h26.655C33.8 58.78 48.837 48.614 48.837 48.614S63.87 58.781 64.43 75.053h28.204C81.365 62.424 55.6 35.233 48.435 35.233"></path>
              </svg>
            </span>
            <span
              className={
                !camp.accepted_guests.includes("bike") ? "welcome-none" : ""
              }
            >
              <svg
                fill="#455A64"
                height="36px"
                width="36px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300.25 300.25"
                xmlSpace="preserve"
              >
                <path d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273   c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979   c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141   c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166   c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12   c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201   c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508   c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051   c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289   c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547   S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062   c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478   h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626   c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655   c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642   c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461   c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z   M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785   c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977   c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z"></path>
              </svg>
            </span>
            <span
              className={
                !camp.accepted_guests.includes("caravan") ? "welcome-none" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="#455A64"
                width="36"
                height="36"
              >
                <path d="M49.431 69.021a4.525 4.525 0 00-4.527 4.529 4.525 4.525 0 109.053 0 4.525 4.525 0 00-4.526-4.529m0-5.188c5.361 0 9.71 4.349 9.71 9.717 0 5.366-4.349 9.717-9.71 9.717-5.364 0-9.709-4.35-9.709-9.717 0-5.368 4.345-9.717 9.709-9.717M3.135 67.467H.923c-.44 0-.8.358-.8.8v5.677a.8.8 0 00.8.799h17.789V70.58H4.735a.805.805 0 01-.8-.8v-1.513a.8.8 0 00-.8-.8M84.792 50.005c0 .49-.401.891-.892.891H73.337a.893.893 0 01-.889-.89V37.303c0-.489.4-.892.89-.892H83.9c.489 0 .892.403.892.892v12.701zm2.118-15.543l-.002.004a1.05 1.05 0 00-.744-.313H71.078c-.292 0-.558.12-.746.313-.193.189-.313.456-.313.745v39.335h17.2V35.21a1.05 1.05 0 00-.307-.745l-.002-.004z"></path>
                <path d="M89.095 75.485a.937.937 0 01-.938.937H69.079a.938.938 0 01-.936-.937V35.211c0-.81.332-1.544.862-2.076a2.919 2.919 0 012.074-.862h15.085c.806 0 1.537.33 2.071.862l-.002.003c.533.534.862 1.266.862 2.073v40.274zm-26.983-26.59a2.002 2.002 0 01-1.996 2.002H21.883c-6.892 0 5.073-18.481 10.05-18.481h28.185a2 2 0 011.995 1.997v14.483zM78.022 19.9c-8.989.005-19.387.005-29.66.005-22.27 0-40.424 18.173-40.424 40.453v12.255c0 4.103 3.345 7.455 7.445 7.455h23.163a12.642 12.642 0 01-1.797-6.518c0-7.009 5.677-12.692 12.682-12.692 7.004 0 12.681 5.684 12.681 12.692 0 2.38-.655 4.611-1.797 6.518h31.67c4.104 0 7.45-3.351 7.45-7.455V41.329c0-11.804-9.618-21.43-21.414-21.43z"></path>
              </svg>
            </span>
            <span
              className={
                !camp.accepted_guests.includes("homevan") ? "welcome-none" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8.467 8.467"
                fill="#455A64"
                width="36"
                height="36"
              >
                <path d="M7.28 5.552a.532.532 0 10-1.066 0 .532.532 0 101.065 0zM2.221 5.552a.532.532 0 10-1.065 0 .532.532 0 101.065 0z"></path>
                <path d="M5.393 2.385a15.82 15.82 0 00-2.47.135.794.794 0 00-.373.153A16.343 16.343 0 00.871 4.13a.799.799 0 00-.22.417 16.33 16.33 0 00-.12.704.266.266 0 00.264.304h.229a.665.665 0 011.33 0h3.728a.665.665 0 011.33-.01.532.532 0 00.397-.358 7.025 7.025 0 00.066-.215 1.597 1.597 0 00-.012-.925 10.976 10.976 0 00-.477-1.24.53.53 0 00-.416-.306 15.82 15.82 0 00-1.577-.116zm-2.114.358a.066.066 0 01.067.085 3.319 3.319 0 00-.131.842.132.132 0 01-.136.129 10.892 10.892 0 00-1.346.045.066.066 0 01-.05-.115 16.079 16.079 0 011.026-.844.53.53 0 01.249-.103 15.555 15.555 0 01.317-.038.066.066 0 01.004 0zm.685 1.225a.132.132 0 01.005 0h3.175a.132.132 0 010 .264H3.969a.132.132 0 01-.005-.264z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="single-camp-welcome-child">
          <span>{t("space")}</span>
          <p>{camp.space_type === "nicepitch" ? "მოწყობილი" : "ცარიელი"}</p>
        </div>
        <div className="single-camp-welcome-child">
          <span>{t("price")}</span>
          <p>
            {camp.negotiable == true ? (
              <span>{t("negotiable")}</span>
            ) : (
              <>
                <span>₾ {camp.price}</span> / {t("day")}
              </>
            )}
          </p>
        </div>
        <div className="single-camp-welcome-child">
          <span>{t("area")}</span>
          <p>
            {camp.size} {t("msq")}
          </p>
        </div>
        <div className="single-camp-welcome-child">
          <span>{t("capacity")}</span>
          <p>
            {camp.capacity} {t("person")}
          </p>
        </div>
      </div>
      <div className="single-camp-host">
        <div className="single-camp-host-image">
          <Link href={`/user/${nickname[0].nickname}`}>
            <Image
              src={pic[0].picture}
              alt={nickname[0].nickname}
              width={200}
              height={200}
            />
          </Link>
          <div>
            <h2>
              {t("yourHostIs")}{" "}
              <Link href={`/user/${nickname[0].nickname}`}>
                {nickname[0].nickname}
              </Link>
              !
            </h2>
            <Link href={`/user/${nickname[0].nickname}`} className="all-ads">
              {t("allAdvertisements")}
            </Link>
          </div>
        </div>
        <div className="single-camp-host-number">
          <span>{camp.first_name}</span>
          <p>{camp.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCampHost;
