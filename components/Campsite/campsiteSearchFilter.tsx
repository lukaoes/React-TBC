"use client";
import { FC, ChangeEvent } from "react";
import { useI18n } from "../../locales/client";

interface CampsiteSearchFilterProps {
  onSearch: (term: string) => void;
  onFilter: () => void;
}

const CampsiteSearchFilter: FC<CampsiteSearchFilterProps> = ({
  onSearch,
  onFilter,
}) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  const t = useI18n();

  return (
    <>
      <div className="campsite-search-filter">
        <div className="campsite-search-filter-container">
          <input
            type="text"
            name="search"
            placeholder={t("camping.search")}
            className="campsite-search-filter-search"
            onChange={handleSearchChange}
          />
          <div className="campsite-search-filter-filter" onClick={onFilter}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.95894 19.1653L3.95894 16.8855C5.61448 16.4356 6.5918 14.7287 6.14185 13.0732C5.85285 12.0099 5.02223 11.1793 3.95894 10.8903L3.95894 0.833805C3.95894 0.373617 3.58589 0.000566326 3.1257 0.000566346C2.66551 0.000566366 2.29247 0.373617 2.29247 0.833805L2.29247 10.8903C0.636889 11.3403 -0.340436 13.0471 0.109519 14.7026C0.398514 15.7659 1.22913 16.5965 2.29243 16.8855L2.29243 19.1653C2.29243 19.6255 2.66548 19.9985 3.12566 19.9985C3.58585 19.9985 3.95894 19.6255 3.95894 19.1653Z"
                fill="black"
              ></path>
              <path
                d="M9.34305 0.834293L9.34305 3.11407C7.68775 3.56312 6.70988 5.26901 7.15889 6.92431C7.44758 7.98846 8.27886 8.81979 9.34305 9.10847L9.34305 19.1658C9.34305 19.626 9.7161 19.999 10.1763 19.999C10.6365 19.999 11.0095 19.626 11.0095 19.1658L11.0095 9.10847C12.6648 8.65941 13.6427 6.95353 13.1937 5.29822C12.905 4.23407 12.0737 3.40275 11.0095 3.11406L11.0095 0.834293C11.0095 0.374105 10.6365 0.00105461 10.1763 0.00105463C9.7161 0.00105465 9.34305 0.374105 9.34305 0.834293Z"
                fill="black"
              ></path>
              <path
                d="M16.3959 0.834293L16.3959 10.8908C14.7404 11.3407 13.7631 13.0476 14.213 14.7031C14.502 15.7664 15.3327 16.597 16.3959 16.886L16.3959 19.1658C16.3959 19.626 16.769 19.999 17.2292 19.999C17.6894 19.999 18.0624 19.626 18.0624 19.1658L18.0624 16.886C19.718 16.4361 20.6953 14.7292 20.2453 13.0737C19.9563 12.0104 19.1257 11.1798 18.0624 10.8908L18.0624 0.834293C18.0624 0.374105 17.6894 0.00105461 17.2292 0.00105463C16.769 0.00105465 16.3959 0.374105 16.3959 0.834293Z"
                fill="black"
              ></path>
            </svg>
            {t("camping.filter")}
          </div>
        </div>
      </div>
    </>
  );
};

export default CampsiteSearchFilter;
