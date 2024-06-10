"use client";
import { FC, useState, ChangeEvent, FormEvent } from "react";
import { AddCampsite, Campsite } from "../../types";
import { cities } from "../Add/Product/mainProductField";
import {
  activitiesList,
  amenitiesList,
} from "../Add/Campsite/mainCampsiteField";
import { updateCampsiteAction } from "../../actions";

interface ICamp {
  camp: Campsite;
  onClose: () => void;
}

const SingleCampEditModal: FC<ICamp> = ({ camp, onClose }) => {
  const [formData, setFormData] = useState<AddCampsite>({
    id: camp.id,
    space_type: camp.space_type || "",
    accepted_guests: camp.accepted_guests || [],
    capacity: camp.capacity || "1 ადამიანი",
    location: camp.location || "თბილისი",
    main_photo: camp.main_photo || "",
    photo_urls: camp.photo_urls || [],
    size: parseFloat(camp.size) || 0,
    name: camp.name || "",
    amenities: camp.amenities || [],
    activities: camp.activities || [],
    description: camp.description || "",
    descriptionen: camp.descriptionen || "",
    first_name: camp.first_name || "",
    phone: camp.phone || "",
    price: camp.price || "0",
    negotiable: camp.negotiable || false,
    map: camp.map || "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter((v: string) => v !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await updateCampsiteAction(formData);
    onClose();
  };

  return (
    <>
      <div
        className="main-product-card-modal-container-bg"
        onClick={onClose}
      ></div>
      <div className="single-campsite-edit-modal">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>სივრცის ტიპი</h2>
            <input
              className="radio-input"
              type="radio"
              name="space_type"
              id="barepitch"
              value="barepitch"
              checked={formData.space_type === "barepitch"}
              onChange={handleInputChange}
            />
            <label htmlFor="barepitch">უბრალო სივრცე</label>
            <input
              className="radio-input"
              type="radio"
              name="space_type"
              id="nicepitch"
              value="nicepitch"
              checked={formData.space_type === "nicepitch"}
              onChange={handleInputChange}
            />
            <label htmlFor="nicepitch">მოწყობილი სივრცე</label>
          </div>
          <div>
            <h2>ვისი მიღება შეგიძლიათ</h2>
            <label htmlFor="tent">
              <input
                type="checkbox"
                name="accepted_guests"
                id="tent"
                value="tent"
                checked={formData.accepted_guests.includes("tent")}
                onChange={handleInputChange}
              />
              კარავი
            </label>
            <label htmlFor="bike">
              <input
                type="checkbox"
                name="accepted_guests"
                id="bike"
                value="bike"
                checked={formData.accepted_guests.includes("bike")}
                onChange={handleInputChange}
              />
              ველოსიპედი
            </label>
            <label htmlFor="caravan">
              <input
                type="checkbox"
                name="accepted_guests"
                id="caravan"
                value="caravan"
                checked={formData.accepted_guests.includes("caravan")}
                onChange={handleInputChange}
              />
              ქარავანი
            </label>
            <label htmlFor="homevan">
              <input
                type="checkbox"
                name="accepted_guests"
                id="homevan"
                value="homevan"
                checked={formData.accepted_guests.includes("homevan")}
                onChange={handleInputChange}
              />
              სახლი-მანქანა
            </label>
          </div>
          <div className="input-block">
            <h2>რამდენი ადამიანი დაეტევა</h2>

            <select
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
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
              <option value="10-15">5-15 ადამიანი</option>
              <option value="15-20">15-20 ადამიანი</option>
              <option value="20-30">20-30 ადამიანი</option>
              <option value="30+">30+ ადამიანი</option>
            </select>
          </div>
          <div className="input-block">
            <label htmlFor="location">აირჩიეთ ლოკაცია*</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            >
              {cities.map((city, index) => (
                <option key={`select-cities-${index}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="input-block">
            <h2>სახელი და ტელეფონის ნომერი</h2>
            <label htmlFor="firstName">სახელი*</label>
            <input
              type="text"
              name="first_name"
              id="firstName"
              value={formData.first_name}
              placeholder="თქვენი სახელი"
              onChange={handleInputChange}
            />
            <label htmlFor="phone">ტელეფონის ნომერი*</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone}
              placeholder="ტელეფონის ნომერი"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h2>ფასი</h2>

            <label htmlFor="price">ნივთის ფასი*</label>
            <input
              type="number"
              name="price"
              id="price"
              className="camp-edit-price"
              value={formData.price}
              placeholder="ფასი"
              onChange={handleInputChange}
            />
            <input
              type="checkbox"
              name="negotiable"
              id="negotiable"
              checked={formData.negotiable}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  negotiable: e.target.checked,
                }))
              }
            />
            <label htmlFor="negotiable">ფასი შეთანხმებით</label>
          </div>
          <div className="input-block">
            <h2>ფოტოები</h2>

            <label htmlFor="img-url">ან ატვირთეთ URL-ს გამოყენებით:</label>
            <input
              type="text"
              placeholder="ჩასვით სურათის ლინკი"
              name="main_photo"
              id="img-url"
              value={formData.main_photo}
              onChange={handleInputChange}
            />
            <span>დამატებითი სურათები:</span>
            {formData.photo_urls.map((url, index) => (
              <input
                key={`photo_urls-${index}`}
                type="text"
                name="photo_urls"
                placeholder="ჩასვით სურათის ლინკი"
                value={url}
                onChange={(e) => {
                  const newPhotoUrls = [...formData.photo_urls];
                  newPhotoUrls[index] = e.target.value;
                  setFormData((prevState) => ({
                    ...prevState,
                    photo_urls: newPhotoUrls,
                  }));
                }}
              />
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  photo_urls: [...prevState.photo_urls, ""],
                }))
              }
            >
              დამატებითი სურათის დამატება
            </button>
          </div>
          <div className="input-block">
            <h2>თქვენი სივრცის ზომა კვ/მ</h2>

            <input
              type="text"
              name="size"
              value={formData.size}
              placeholder="ჩაწერეთ თქვენი სივრცის ზომა"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-block">
            <h2>სივრცის სახელი და ლოკაცია</h2>
            <label htmlFor="name">სახელი</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="ჩაწერეთ თქვნი სივრცის სახელი"
              onChange={handleInputChange}
            />
            <label htmlFor="map">რუკის Iframe ლინკი</label>
            <input
              type="text"
              name="map"
              id="map"
              value={formData.map}
              placeholder="რუკის iframe ლინკი"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-block">
            <h2>სივრცის აღწერა</h2>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              placeholder="აღწერეთ თქვენ ისივრცე რამდენიმე წინადადებით."
              rows={5}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="input-block">
            <h2>თქვენი სივრცის დახასიათება ინგლისურად.</h2>
            <textarea
              id="descriptionen"
              name="descriptionen"
              value={formData.descriptionen}
              placeholder="აღწერეთ თქვენ ისივრცე ინგლისურად რამდენიმე წინადადებით."
              rows={5}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <h2>რას ნახავთ აქ</h2>
            <div className="amenties-row">
              {amenitiesList.map((amenity) => (
                <div key={amenity}>
                  <label>
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onChange={handleInputChange}
                    />
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>რა აქტივობებით შეიძლება დაკავდეს სტუმარი.</h2>
            <div className="activities-row">
              {activitiesList.map((activity) => (
                <div key={activity}>
                  <label>
                    <input
                      type="checkbox"
                      name="activities"
                      value={activity}
                      checked={formData.activities.includes(activity)}
                      onChange={handleInputChange}
                    />
                    {activity}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="single-camp-edit-buttons">
            <button onClick={onClose}>დახურვა</button>
            <button type="submit">შენახვა</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SingleCampEditModal;
