"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { cities } from "../Product/mainProductField";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addCampsite } from "../../../actions";
import barepitch from "../../../public/assets/images/barepitch.svg";
import nicepitch from "../../../public/assets/images/nicepitch.svg";
import Image from "next/image";
const amenitiesList = [
  "ცხოველები დაშვებულია",
  "სასმელი წყალი",
  "მაყალი",
  "დენი",
  "აუზი",
  "სარეცხის მანქანა",
  "საპირფარეშო (სახლში)",
  "დამოუკიდებელი საპირფარეშო",
  "ინტერნეტი",
  "შხაპი (სახლში)",
  "დამოუკიდებელი საშხაპე",
  "სამზარეულო (სახლში)",
  "დამოუკიდბელი სამზარეულო",
  "მაცივარი (სახლში)",
  "დამოუკიდებელი მაცივარი",
  "ველოსიპედის გასაჩერებელი",
  "მანქანის პარკინგი",
  "საპიკნიკე მაგიდა",
  "კოცონის სივრცე",
  "ბავშვების სათამაშო სივრცე",
];
const activitiesList = [
  "პარკები",
  "ბარი / რესტორანი",
  "მდინარე",
  "ცოცვა",
  "ღირსშესანიშნაობები",
  "თევზაობა",
  "სალაშქრო ადგილები",
  "ცურვა",
];
interface FormData {
  user_id: string;
  space_type: string;
  accepted_guests: string[];
  capacity: string;
  location: string;
  first_name: string;
  phone: string;
  main_photo: string;
  photo_urls: string[];
  size: number;
  name: string;
  amenities: string[];
  activities: string[];
  description: string;
  descriptionen: string;
  price: string;
  negotiable: boolean;
  [key: string]: any;
}
const MainCampsiteField = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    user_id: "",
    space_type: "",
    accepted_guests: [],
    capacity: "1 ადამიანი",
    location: "თბილისი",
    main_photo: "",
    photo_urls: [],
    size: 0,
    name: "",
    amenities: [],
    activities: [],
    description: "",
    descriptionen: "",
    first_name: "",
    phone: "",
    price: "0",
    negotiable: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  console.log(formData);

  useEffect(() => {
    if (user && user.sub) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user_id: user.sub || "",
      }));
    }
  }, [user]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    if (name === "photo_urls") {
      setFormData((prevData) => {
        const newPhotoUrls = [...prevData.photo_urls];
        const index = parseInt(e.target.id.split("-")[2]);

        if (value) {
          newPhotoUrls[index] = value;
        } else {
          newPhotoUrls.splice(index, 1);
        }

        return {
          ...prevData,
          photo_urls: newPhotoUrls,
        };
      });
    } else if (type === "checkbox") {
      if (name === "negotiable") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked ?? false,
        }));
      } else {
        setFormData((prevData) => {
          let updatedArray = [...(prevData[name] as string[])];
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          return {
            ...prevData,
            [name]: updatedArray,
          };
        });
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: { [key: string]: string } = {};
    const requiredFields = [
      "space_type",
      "accepted_guests",
      "capacity",
      "location",
      "size",
      "name",
      "phone",
      "first_name",
      "price",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        valid = false;
        newErrors[field] = "ეს ადგილი შესავსებია.";
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addCampsite(formData);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-campsite-container">
      <div className="add-campsite-detail-container">
        <div className="campsite-space-type">
          <h2>როგორია თქვენი სივრცე?</h2>
          <div className="campsite-space-container">
            <div className="campsite-space-type-single">
              <input
                className="radio-input"
                type="radio"
                name="space_type"
                id="barepitch"
                value="barepitch"
                onChange={handleInputChange}
              />
              <label htmlFor="barepitch">
                <h3>უბრალო სივრცე</h3>
                <Image
                  src={barepitch}
                  alt="barepitch"
                  width={100}
                  height={100}
                />
                <p>
                  უბრალო სივრცე, სადაც ხალხს შეეძლება კარვის გაშლა, ქარავანის ან
                  სახლი-მანქანის დაპარკინგება. ეზოსთან ერთად, შესაძლოა იყოს
                  ფერმა ან ვენახი.
                </p>
              </label>
            </div>
            <div className="campsite-space-type-single">
              <input
                className="radio-input"
                type="radio"
                name="space_type"
                id="nicepitch"
                value="nicepitch"
                onChange={handleInputChange}
              />
              <label htmlFor="nicepitch">
                <h3>მოწყობილი გარე სივრცე</h3>
                <Image
                  src={nicepitch}
                  alt="barepitch"
                  width={100}
                  height={100}
                />
                <p>
                  მოწყობილი სივრცე, სადაც არის საპირფარეშო, დენის წყარო და სველი
                  წერტილი. შესაძლოა იყოს ინტერნეტი, მაგიდა-სკამები ან მაყალი.
                </p>
              </label>
            </div>
            {errors.space_type && <p>{errors.space_type}</p>}
          </div>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-accepted-guests">
          <h2>ვისი მიღება გსურთ?</h2>
          <p>შეგიძლიათ რამდენიმე ვარიანტის არჩევა</p>
          <div className="guest-options-row">
            <div className="guest-option-single">
              <label htmlFor="tent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  height={60}
                  width={60}
                  fill="#455A64"
                >
                  <path d="M97.274 81.656H2.051A2.047 2.047 0 010 79.612c0-1.14.914-2.053 2.05-2.053h95.224a2.048 2.048 0 110 4.097M48.435 33.176c9.208 0 39.386 33.36 46.3 41.139-7.134-18.38-32.087-53.606-45.046-54.41-12.962-.809-37.91 35.536-45.057 54.273 6.712-8.074 34.642-41.002 43.803-41.002"></path>
                  <path d="M48.435 35.233c-7.152 0-31.344 27.217-41.856 39.82h26.655C33.8 58.78 48.837 48.614 48.837 48.614S63.87 58.781 64.43 75.053h28.204C81.365 62.424 55.6 35.233 48.435 35.233"></path>
                </svg>
                კარავი
                <input
                  type="checkbox"
                  name="accepted_guests"
                  id="tent"
                  value="tent"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="guest-option-single">
              <label htmlFor="bike">
                <svg
                  fill="#455A64"
                  height="60px"
                  width="60px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 300.25 300.25"
                  xmlSpace="preserve"
                >
                  <path
                    d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273
    c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979
    c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141
    c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166
    c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12
    c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201
    c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508
    c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051
    c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289
    c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547
    S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062
    c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478
    h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626
    c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655
    c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642
    c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461
    c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z
    M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785
    c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977
    c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z"
                  />
                </svg>
                ველოსიპედი
                <input
                  type="checkbox"
                  name="accepted_guests"
                  id="bike"
                  value="bike"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="guest-option-single">
              <label htmlFor="caravan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="#455A64"
                  height={60}
                  width={60}
                >
                  <path d="M49.431 69.021a4.525 4.525 0 00-4.527 4.529 4.525 4.525 0 109.053 0 4.525 4.525 0 00-4.526-4.529m0-5.188c5.361 0 9.71 4.349 9.71 9.717 0 5.366-4.349 9.717-9.71 9.717-5.364 0-9.709-4.35-9.709-9.717 0-5.368 4.345-9.717 9.709-9.717M3.135 67.467H.923c-.44 0-.8.358-.8.8v5.677a.8.8 0 00.8.799h17.789V70.58H4.735a.805.805 0 01-.8-.8v-1.513a.8.8 0 00-.8-.8M84.792 50.005c0 .49-.401.891-.892.891H73.337a.893.893 0 01-.889-.89V37.303c0-.489.4-.892.89-.892H83.9c.489 0 .892.403.892.892v12.701zm2.118-15.543l-.002.004a1.05 1.05 0 00-.744-.313H71.078c-.292 0-.558.12-.746.313-.193.189-.313.456-.313.745v39.335h17.2V35.21a1.05 1.05 0 00-.307-.745l-.002-.004z"></path>
                  <path d="M89.095 75.485a.937.937 0 01-.938.937H69.079a.938.938 0 01-.936-.937V35.211c0-.81.332-1.544.862-2.076a2.919 2.919 0 012.074-.862h15.085c.806 0 1.537.33 2.071.862l-.002.003c.533.534.862 1.266.862 2.073v40.274zm-26.983-26.59a2.002 2.002 0 01-1.996 2.002H21.883c-6.892 0 5.073-18.481 10.05-18.481h28.185a2 2 0 011.995 1.997v14.483zM78.022 19.9c-8.989.005-19.387.005-29.66.005-22.27 0-40.424 18.173-40.424 40.453v12.255c0 4.103 3.345 7.455 7.445 7.455h23.163a12.642 12.642 0 01-1.797-6.518c0-7.009 5.677-12.692 12.682-12.692 7.004 0 12.681 5.684 12.681 12.692 0 2.38-.655 4.611-1.797 6.518h31.67c4.104 0 7.45-3.351 7.45-7.455V41.329c0-11.804-9.618-21.43-21.414-21.43z"></path>
                </svg>
                ქარავანი
                <input
                  type="checkbox"
                  name="accepted_guests"
                  id="caravan"
                  value="caravan"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="guest-option-single">
              <label htmlFor="homevan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 8.467 8.467"
                  fill="#455A64"
                  height={60}
                  width={60}
                >
                  <path d="M7.28 5.552a.532.532 0 10-1.066 0 .532.532 0 101.065 0zM2.221 5.552a.532.532 0 10-1.065 0 .532.532 0 101.065 0z"></path>
                  <path d="M5.393 2.385a15.82 15.82 0 00-2.47.135.794.794 0 00-.373.153A16.343 16.343 0 00.871 4.13a.799.799 0 00-.22.417 16.33 16.33 0 00-.12.704.266.266 0 00.264.304h.229a.665.665 0 011.33 0h3.728a.665.665 0 011.33-.01.532.532 0 00.397-.358 7.025 7.025 0 00.066-.215 1.597 1.597 0 00-.012-.925 10.976 10.976 0 00-.477-1.24.53.53 0 00-.416-.306 15.82 15.82 0 00-1.577-.116zm-2.114.358a.066.066 0 01.067.085 3.319 3.319 0 00-.131.842.132.132 0 01-.136.129 10.892 10.892 0 00-1.346.045.066.066 0 01-.05-.115 16.079 16.079 0 011.026-.844.53.53 0 01.249-.103 15.555 15.555 0 01.317-.038.066.066 0 01.004 0zm.685 1.225a.132.132 0 01.005 0h3.175a.132.132 0 010 .264H3.969a.132.132 0 01-.005-.264z"></path>
                </svg>
                სახლი-მანქანა
                <input
                  type="checkbox"
                  name="accepted_guests"
                  id="homevan"
                  value="homevan"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-capacity">
          <h2>რამდენი ადამიანი დაეტევა თქვენს სივრცეში?</h2>
          <p>აირჩიეთ ისე, რომ არ იყოს სივრცე გადატვირთული.</p>
          <div>
            <select name="capacity" onChange={handleInputChange}>
              <option value="" disabled>
                აირჩიეთ რაოდენობა
              </option>
              <option value="1 ადამიანი">1 ადამიანი</option>
              <option value="2 ადამიანი">2 ადამიანი</option>
              <option value="3 ადამიანი">3 ადამიანი</option>
              <option value="4 ადამიანი">4 ადამიანი</option>
              <option value="5 ადამიანი">5 ადამიანი</option>
              <option value="5-10 ადამიანი">5-10 ადამიანი</option>
              <option value="10-15 ადამიანი">5-15 ადამიანი</option>
              <option value="15-20 ადამიანი">15-20 ადამიანი</option>
              <option value="20-30 ადამიანი">20-30 ადამიანი</option>
              <option value="30+ ადამიანი">30+ ადამიანი</option>
            </select>
          </div>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-location">
          <h2>სად მდებარეობს სივრცე?</h2>
          <label htmlFor="location">აირჩიეთ ლოკაცია*</label>
          <select name="location" onChange={handleInputChange}>
            {cities.map((city, index) => (
              <option key={`select-cities-${index}`} value={city}>
                {city}
              </option>
            ))}
          </select>

          <label htmlFor="firstName">სახელი*</label>
          <input
            type="text"
            name="first_name"
            id="firstName"
            placeholder="თქვენი სახელი"
            onChange={handleInputChange}
          />
          {errors.first_name && <p>{errors.first_name}</p>}
          <label htmlFor="phone">ტელეფონის ნომერი*</label>
          <input
            type="number"
            placeholder="ტელეფონის ნომერი"
            name="phone"
            id="phone"
            onChange={handleInputChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="add-campsite-price">
          <h2>ფასი</h2>
          <label htmlFor="price">ნივთის ფასი*</label>
          <input
            placeholder="ფასი"
            type="number"
            name="price"
            id="price"
            onChange={handleInputChange}
          />
          {errors.price && <p>{errors.price}</p>}
          <input
            type="checkbox"
            name="negotiable"
            id="negotiable"
            onChange={handleInputChange}
          />
          <label htmlFor="negotiable">ფასი შეთანხმებით</label>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-main-photo">
          <h2>დაამატეთ ფოტო</h2>
          <p>
            უფრო მეტი ადამიანი დაინტერესდება განცხადებით, რომელსაც ფოტო აქვს
          </p>
          <span>აირჩიეთ მოწყობილობიდან</span>
          <input type="file" name="file" />
          <label htmlFor="img-url">ან ატვირთეთ URL-ს გამოყენებით:</label>
          <input
            type="text"
            placeholder="ჩასვით სურათის ლინკი"
            name="main_photo"
            id="img-url"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-photo-urls">
          <span>დამატებითი სურათები:</span>
          <input
            type="text"
            name="photo_urls"
            placeholder="ჩასვით სურათის ლინკი"
            id="img-additional-0"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="photo_urls"
            placeholder="ჩასვით სურათის ლინკი"
            id="img-additional-1"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="photo_urls"
            placeholder="ჩასვით სურათის ლინკი"
            id="img-additional-2"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-size">
          <h2>დაახლოებით რამხელაა ადგილი?</h2>
          <span>
            ჩაწერეთ სავარაუდო ზომა, რათა სტუმრებმა იცოდნენ რას ელოდონ.
          </span>
          <div className="flex gap-[10px]">
            <input
              placeholder="ჩაწერეთ თქვენი სივრცის ზომა"
              type="text"
              name="size"
              onChange={handleInputChange}
            />
            <span>კვ/მ.</span>
          </div>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-name">
          <h2>დაარქვით თქვენ სივრცეს რაიმე სახელი.</h2>
          <span>
            შეურჩიეთ თქვენს საკუთრებას სახელი. სცადეთ იყოს ეს კრეატიული, რაც
            მოიზიდავს ბევრ სტუმარს.
          </span>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="ჩაწერეთ თქვნი სივრცის სახელი"
          />
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-description">
          <h2>თქვენი სივრცის დახასიათება.</h2>
          <textarea
            id="description"
            name="description"
            placeholder="აღწერეთ თქვენ ისივრცე რამდენიმე წინადადებით."
            onChange={handleInputChange}
            rows={5}
          ></textarea>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-descriptionen">
          <h2>თქვენი სივრცის დახასიათება ინგლისურად.</h2>
          <span>ეს დაგეხმარებათ მოიზიდოთ უცხოელი სტუმრები.</span>
          <textarea
            id="description"
            name="descriptionen"
            placeholder="აღწერეთ თქვენ ისივრცე ინგლისურად რამდენიმე წინადადებით."
            onChange={handleInputChange}
            rows={5}
          ></textarea>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-amenities">
          <h2>რას ნახავთ აქ</h2>
          <p>აირჩიეთ ყველა ვარიანტი, რასაც სტუმრებს სთავაზობთ</p>
          <div className="amenties-row">
            {amenitiesList.map((amenity) => (
              <div key={amenity}>
                <label>
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    onChange={handleInputChange}
                  />
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="add-campsite-detail-container">
        <div className="campsite-activities">
          <h2>რა აქტივობებით შეიძლება დაკავდეს სტუმარი.</h2>
          <div className="activities-row">
            {activitiesList.map((activity) => (
              <div key={activity}>
                <label>
                  <input
                    type="checkbox"
                    name="activities"
                    value={activity}
                    onChange={handleInputChange}
                  />
                  {activity}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {user?.sub && <button type="submit">დამატება</button>}
      </div>
    </form>
  );
};

export default MainCampsiteField;
