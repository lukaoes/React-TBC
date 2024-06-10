"use client";
import { FC, useState, useEffect, ChangeEvent } from "react";
import {
  activitiesList,
  amenitiesList,
} from "../Add/Campsite/mainCampsiteField";
import { cities } from "../Add/Product/mainProductField";

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
        <h2>სივრცის ტიპი</h2>
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
            <label htmlFor="barepitch">ცარიელი სივრცე</label>
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
            <label htmlFor="nicepitch">მოწყობილი სივრცე</label>
          </div>
        </div>
      </div>
      <div>
        <h2>რითი გსურთ დარჩენა</h2>
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
              კარავი
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
              ველოსიპედი
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
              ქარავანი
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
              სახლი-მანქანა
            </label>
          </div>
        </div>
      </div>
      <div className="campsite-filter-capacity">
        <h2>სტუმრების რაოდენობა</h2>
        <select
          name="capacity"
          value={localFilters.capacity}
          onChange={handleChange}
        >
          <option value="" disabled>
            აირჩიეთ რაოდენობა
          </option>
          <option value="1">1 ადამიანი</option>
          <option value="2">2 ადამიანი</option>
          <option value="3">3 ადამიანი</option>
          <option value="4">4 ადამიანი</option>
          <option value="5">5 ადამიანი</option>
          <option value="5-10">5-10 ადამიანი</option>
          <option value="10-15">10-15 ადამიანი</option>
          <option value="15-20">15-20 ადამიანი</option>
          <option value="20-30">20-30 ადამიანი</option>
          <option value="30+">30+ ადამიანი</option>
        </select>
      </div>
      <div className="campsite-filter-location">
        <h2>აირჩიეთ ლოკაცია</h2>
        <select
          name="location"
          value={localFilters.location}
          onChange={handleChange}
        >
          <option disabled value="">
            აირჩიე ქალაქი
          </option>
          {cities.map((city, index) => (
            <option key={`select-cities-${index}`} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>ფასი</h2>
        <div className="campsite-filter-price">
          <input
            type="number"
            name="min_price"
            id="min-price"
            className="camp-edit-price"
            placeholder="ფასი"
            value={localFilters.min_price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="max_price"
            id="max-price"
            className="camp-edit-price"
            placeholder="ფასი"
            value={localFilters.max_price}
            onChange={handleChange}
          />
        </div>
        <div className="campsite-filter-label">
          <span>მინ.</span>
          <span>მაქს.</span>
        </div>
      </div>
      <div className="campsite-filter-amenties">
        <h2>რა გსურთ სივრცეში</h2>
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
        <h2>რა აქტივობა გსურთ</h2>
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
        <button onClick={handleSubmit}>გაფილტვრა</button>
        <button onClick={handleClear}>ფილტრის გასუფთავება</button>
      </div>
    </div>
  );
};

export default CampsiteFilter;
