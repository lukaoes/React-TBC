"use client";
import React, { useState, useEffect } from "react";
import { deleteSingleCampsite, getCampsitesDisplay } from "../../actions";
import { CampsitesDisplay } from "../../types";
import { Link } from "next-view-transitions";

const AdminCampsitesTable = () => {
  const [displayCamps, setDisplayCampsites] = useState<CampsitesDisplay[]>([]);
  useState<CampsitesDisplay | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const campsites = await getCampsitesDisplay();
      setDisplayCampsites(campsites);
    };

    fetchProducts();
  }, []);

  const handleDeleteClick = async (id: number) => {
    try {
      await deleteSingleCampsite(id);
      setDisplayCampsites((prevProds) =>
        prevProds.filter((prod) => prod.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete campsite:", error);
    }
  };

  return (
    <div className="admin-table">
      <div className="row admin-table-header blue">
        <div className="cell">ID</div>
        <div className="cell">სახელი</div>
        <div className="cell">ფასი</div>
        <div className="cell">მდებარეობა</div>
        <div className="cell">ნახვა</div>
        <div className="cell">წაშლა</div>
      </div>
      {displayCamps.map((campsite, index) => (
        <div className="row" key={`campsite-admin-${index}`}>
          <div className="cell" data-title="ID">
            {campsite.id}
          </div>
          <div className="cell" data-title="სახელი">
            <Link href={`/campsites/${campsite.id}`}>{campsite.name}</Link>
          </div>
          <div className="cell" data-title="ფასი">
            {campsite.price}
          </div>
          <div className="cell" data-title="მდებარეობა">
            {campsite.location}
          </div>
          <div className="cell" data-title="ნახვა">
            <Link href={`/campsites/${campsite.id}`}>ნახვა</Link>
          </div>
          <div className="cell" data-title="წაშლა">
            <button onClick={() => handleDeleteClick(campsite.id)}>del</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCampsitesTable;
