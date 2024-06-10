"use client";
import { FC, useState } from "react";
import { CampsitesDisplay } from "../../types";
import CampsiteAds from "./campsiteAds";
import CampsiteSearchFilter from "./campsiteSearchFilter";
import CampsiteFilter from "./campsiteFilter";

interface ICamps {
  displayCamps: CampsitesDisplay[];
}

const CampsiteLayout: FC<ICamps> = ({ displayCamps }) => {
  const [filteredCamps, setFilteredCamps] =
    useState<CampsitesDisplay[]>(displayCamps);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    space_type: "",
    accepted_guests: [] as string[],
    capacity: "",
    location: "",
    min_price: "",
    max_price: "",
    amenities: [] as string[],
    activities: [] as string[],
    search: "",
  });

  const handleFilter = (newFilters: any) => {
    let filtered = displayCamps;

    if (newFilters.search) {
      filtered = filtered.filter((camp) =>
        camp.name.toLowerCase().includes(newFilters.search.toLowerCase())
      );
    }

    if (newFilters.space_type) {
      filtered = filtered.filter(
        (camp) => camp.space_type === newFilters.space_type
      );
    }

    if (newFilters.accepted_guests && newFilters.accepted_guests.length) {
      filtered = filtered.filter((camp) =>
        newFilters.accepted_guests.every((guest: string) =>
          camp.accepted_guests.includes(guest)
        )
      );
    }

    if (newFilters.capacity) {
      filtered = filtered.filter(
        (camp) => camp.capacity === newFilters.capacity
      );
    }

    if (newFilters.location) {
      filtered = filtered.filter(
        (camp) => camp.location === newFilters.location
      );
    }

    if (newFilters.min_price || newFilters.max_price) {
      filtered = filtered.filter((camp) => {
        const price = parseFloat(camp.price);
        return (
          (!newFilters.min_price || price >= newFilters.min_price) &&
          (!newFilters.max_price || price <= newFilters.max_price)
        );
      });
    }

    if (newFilters.amenities && newFilters.amenities.length) {
      filtered = filtered.filter((camp) =>
        newFilters.amenities.every((amenity: string) =>
          camp.amenities.includes(amenity)
        )
      );
    }

    if (newFilters.activities && newFilters.activities.length) {
      filtered = filtered.filter((camp) =>
        newFilters.activities.every((activity: string) =>
          camp.activities.includes(activity)
        )
      );
    }

    setFilteredCamps(filtered);
    setFilters(newFilters);
    setIsModalOpen(false);
  };

  const handleSearch = (term: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: term }));
    const filtered = displayCamps.filter((camp) =>
      camp.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCamps(filtered);
  };

  return (
    <>
      <CampsiteSearchFilter
        onSearch={handleSearch}
        onFilter={() => setIsModalOpen(true)}
      />
      <div className="campsite-count">{filteredCamps.length} ადგილი</div>
      <div className="campsites-container">
        <div>
          <CampsiteAds displayCamps={filteredCamps} />
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="modal-overlay">
            <div className="modal">
              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
              <CampsiteFilter
                filters={filters}
                onFilter={handleFilter}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
          <div
            className="main-product-card-modal-container-bg"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default CampsiteLayout;
