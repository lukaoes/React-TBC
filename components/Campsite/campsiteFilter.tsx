"use client";
import { FC, useState, useEffect, ChangeEvent } from "react";
import {
  activitiesList,
  amenitiesList,
} from "../Add/Campsite/mainCampsiteField";
import { cities } from "../Add/Product/mainProductField";
import { useScopedI18n } from "../../locales/client";

interface CampsiteFilterProps {
  filters: any;
  onFilter: (filters: any) => void;
  onClose: () => void;
}

const CampsiteFilter: FC<CampsiteFilterProps> = ({
  filters,
  onFilter,
  onClose,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const t = useScopedI18n("camping");

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setLocalFilters((prevFilters: any) => ({
        ...prevFilters,
        [name]: checked
          ? [...(prevFilters[name] || []), value]
          : (prevFilters[name] || []).filter((item: string) => item !== value),
      }));
    } else {
      setLocalFilters((prevFilters: any) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    onFilter(localFilters);
  };

  const handleClear = () => {
    const clearedFilters = {
      space_type: "",
      accepted_guests: [],
      capacity: "",
      location: "",
      min_price: "",
      max_price: "",
      amenities: [],
      activities: [],
      search: "",
    };
    setLocalFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="single-campsite-filter-modal">
      <div className="single-campsite-filter-close">
        <button onClick={onClose}>X</button>
      </div>

      <div className="single-camp-filter-type">
        <h2>{t("spaceType")}</h2>
        <div>
          <div>
            <input
              className="radio-input"
              type="radio"
              name="space_type"
              id="barepitch"
              value="barepitch"
              checked={localFilters.space_type === "barepitch"}
              onChange={handleChange}
            />
            <label htmlFor="barepitch">{t("barepitch")}</label>
          </div>
          <div>
            <input
              className="radio-input"
              type="radio"
              name="space_type"
              id="nicepitch"
              value="nicepitch"
              checked={localFilters.space_type === "nicepitch"}
              onChange={handleChange}
            />
            <label htmlFor="nicepitch">{t("nicepitch")}</label>
          </div>
        </div>
      </div>
      <div>
        <h2>{t("howYouStayin")}</h2>
        <div className="camp-filter-welcome">
          <div>
            <label htmlFor="tent">
              <input
                type="checkbox"
                name="accepted_guests"
                id="tent"
                value="tent"
                checked={localFilters.accepted_guests.includes("tent")}
                onChange={handleChange}
              />
              {t("tent")}
            </label>
            <label htmlFor="bike">
              <input
                type="checkbox"
                name="accepted_guests"
                id="bike"
                value="bike"
                checked={localFilters.accepted_guests.includes("bike")}
                onChange={handleChange}
              />
              {t("bycicle")}
            </label>
          </div>
          <div>
            <label htmlFor="caravan">
              <input
                type="checkbox"
                name="accepted_guests"
                id="caravan"
                value="caravan"
                checked={localFilters.accepted_guests.includes("caravan")}
                onChange={handleChange}
              />
              {t("caravan")}
            </label>
            <label htmlFor="homevan">
              <input
                type="checkbox"
                name="accepted_guests"
                id="homevan"
                value="homevan"
                checked={localFilters.accepted_guests.includes("homevan")}
                onChange={handleChange}
              />
              {t("homevan")}
            </label>
          </div>
        </div>
      </div>
      <div className="campsite-filter-capacity">
        <h2>{t("guestsCount")}</h2>
        <select
          name="capacity"
          value={localFilters.capacity}
          onChange={handleChange}
        >
          <option value="" disabled>
            {t("chooseCount")}
          </option>
          <option value="1">1 {t("person")}</option>
          <option value="2">2 {t("person")}</option>
          <option value="3">3 {t("person")}</option>
          <option value="4">4 {t("person")}</option>
          <option value="5">5 {t("person")}</option>
          <option value="5-10">5-10 {t("person")}</option>
          <option value="10-15">10-15 {t("person")}</option>
          <option value="15-20">15-20 {t("person")}</option>
          <option value="20-30">20-30 {t("person")}</option>
          <option value="30+">30+ {t("person")}</option>
        </select>
      </div>
      <div className="campsite-filter-location">
        <h2>{t("chooseLocation")}</h2>
        <select
          name="location"
          value={localFilters.location}
          onChange={handleChange}
        >
          <option disabled value="">
            {t("chooseCity")}
          </option>
          {cities.map((city, index) => (
            <option key={`select-cities-${index}`} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>{t("price")}</h2>
        <div className="campsite-filter-price">
          <input
            type="number"
            name="min_price"
            id="min-price"
            className="camp-edit-price"
            placeholder={t("price")}
            value={localFilters.min_price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="max_price"
            id="max-price"
            className="camp-edit-price"
            placeholder={t("price")}
            value={localFilters.max_price}
            onChange={handleChange}
          />
        </div>
        <div className="campsite-filter-label">
          <span>{t("min")}</span>
          <span>{t("max")}</span>
        </div>
      </div>
      <div className="campsite-filter-amenties">
        <h2>{t("whatYouWant")}</h2>
        <div className="amenties-row">
          {amenitiesList.map((amenity) => (
            <div key={amenity}>
              <label>
                <input
                  type="checkbox"
                  name="amenities"
                  value={amenity}
                  checked={localFilters.amenities.includes(amenity)}
                  onChange={handleChange}
                />
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>{t("whichActYouWant")}</h2>
        <div className="campsite-filter-activities">
          {activitiesList.map((activity) => (
            <div key={activity}>
              <label>
                <input
                  type="checkbox"
                  name="activities"
                  value={activity}
                  checked={localFilters.activities.includes(activity)}
                  onChange={handleChange}
                />
                {activity}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="single-camp-edit-buttons">
        <button onClick={handleSubmit}>{t("doFilter")}</button>
        <button onClick={handleClear}>{t("clearFilter")}</button>
      </div>
    </div>
  );
};

export default CampsiteFilter;
