"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { cities } from "../Product/mainProductField";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addCampsite } from "../../../actions";
const amenitiesList = [
  "Animals welcome",
  "Drinking water",
  "Barbecue",
  "Electricity",
  "Swimming pool",
  "Tumble drier",
  "Washing machine",
  "Drying rack",
  "Toilets (in house)",
  "Independent toilets",
  "Independent dry toilets",
  "Wireless internet",
  "Internet",
  "Shower (in house)",
  "Independent shower",
  "Independent solar shower",
  "Kitchen (in house)",
  "Independent kitchen",
  "Handicapped access",
  "Fridge (in house)",
  "Independent fridge",
  "Naturism allowed",
  "Horses welcome",
  "Stable",
  "Bicycle storage",
  "Parking onsite",
  "Picnic table",
  "Campfire allowed",
  "Closed land",
  "Independent access",
  "Train or Bus",
  "Shops",
  "Sanitary dump station",
  "Self-service bikes",
  "Kids playground",
];
const activitiesList = [
  "Amusement Parks",
  "Bar / Restaurant",
  "Canoe / Kayak",
  "Climbing",
  "Clubs",
  "Cultural visits",
  "Diving",
  "Events",
  "Fishing",
  "Golf",
  "Horse-riding",
  "Shopping",
  "Surfing / Sailing",
  "Swimming",
  "Trails",
  "Well-being",
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
    price: "",
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
      // For checkboxes, update the array based on checked/unchecked state
      setFormData((prevData) => {
        let updatedArray = [...prevData[name]]; // Get the current array
        if (checked) {
          updatedArray.push(value); // Add the value if checked
        } else {
          updatedArray = updatedArray.filter((item) => item !== value); // Remove the value if unchecked
        }
        return {
          ...prevData,
          [name]: updatedArray,
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
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
        newErrors[field] = "This field is required";
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
    <form onSubmit={handleSubmit}>
      <div className="campsite-space-type">
        <h2>როგორია თქვენი სივრცე?</h2>
        <div>
          <div>
            <label htmlFor="barepitch">
              <h3>უბრალო სივრცე</h3>
              <p>
                უბრალო სივრცე, სადაც ხალხს შეეძლება კარვის გაშლა, ქარავანის ან
                სახლი-მანქანის დაპარკინგება.
              </p>
            </label>
            <input
              type="radio"
              name="space_type"
              id="barepitch"
              value="barepitch"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="nicepitch">
              <h3>მოწყობილი გარე სივრცე</h3>
              <p>
                მოწყობილი სივრცე, სადაც არის საპირფარეშო, დენის წყარო და სველი
                წერტილი. შესაძლოა იყოს ინტერნეტი, მაგიდა-სკამები ან მაყალი.
              </p>
            </label>
            <input
              type="radio"
              name="space_type"
              id="nicepitch"
              value="nicepitch"
              onChange={handleInputChange}
            />
          </div>
          {errors.space_type && <p>{errors.space_type}</p>}
        </div>
      </div>
      <div className="campsite-accepted-guests">
        <h2>ვისი მიღება გსურთ?</h2>
        <p>შეგიძლიათ რამდენიმე ვარიანტის არჩევა</p>
        <div>
          <div>
            <label htmlFor="tent">კარავი</label>
            <input
              type="checkbox"
              name="accepted_guests"
              id="tent"
              value="tent"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="bike">ველოსიპედი/მოტოციკლი</label>
            <input
              type="checkbox"
              name="accepted_guests"
              id="bike"
              value="bike"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="caravan">ქარავანი</label>
            <input
              type="checkbox"
              name="accepted_guests"
              id="caravan"
              value="caravan"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="homevan">სახლი-მანქანა</label>
            <input
              type="checkbox"
              name="accepted_guests"
              id="homevan"
              value="homevan"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="campsite-capacity">
        <h2>რამდენი ადამიანი დაეტევა თქვენს სივრცეში?</h2>
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
      </div>
      <div>
        <label htmlFor="firstName">სახელი*</label>
        <input
          type="text"
          name="first_name"
          id="firstName"
          onChange={handleInputChange}
        />
        {errors.first_name && <p>{errors.first_name}</p>}
        <label htmlFor="phone">ტელეფონის ნომერი*</label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={handleInputChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div>
        <h2>ფასი</h2>
        <label htmlFor="price">ნივთის ფასი*</label>
        <input
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
      <div className="campsite-main-photo">
        <h2>დაამატეთ ფოტო</h2>
        <p>უფრო მეტი ადამიანი დაინტერესდება განცხადებით, რომელსაც ფოტო აქვს</p>
        <span>აირჩიეთ მოწყობილობიდან</span>
        <input type="file" name="file" />
        <label htmlFor="img-url">ან ატვირთეთ URL-ს გამოყენებით:</label>
        <input
          type="text"
          name="main_photo"
          id="img-url"
          onChange={handleInputChange}
        />
      </div>
      <div className="campsite-photo-urls">
        <span>დამატებითი სურათები:</span>
        <input
          type="text"
          name="photo_urls"
          id="img-additional-0"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="photo_urls"
          id="img-additional-1"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="photo_urls"
          id="img-additional-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="campsite-size">
        <h2>დაახლოებით რამხელაა ადგილი?</h2>
        <span>ჩაწერეთ სავარაუდო ზომა, რათა სტუმრებმა იცოდნენ რას ელოდონ.</span>
        <input type="text" name="size" onChange={handleInputChange} />
      </div>
      <div className="campsite-name">
        <h2>დაარქვით თქვენ სივრცეს რაიმე სახელი.</h2>
        <span>
          შეურჩიეთ თქვენს საკუთრებას სახელი. სცადეთ იყოს ეს კრეატიული, რაც
          მოიზიდავს ბევრ სტუმარს.
        </span>
        <input type="text" name="name" onChange={handleInputChange} />
      </div>
      <div className="campsite-description">
        <h2>თქვენი სივრცის დახასიათება.</h2>
        <textarea
          id="description"
          name="description"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="campsite-descriptionen">
        <h2>თქვენი სივრცის დახასიათება ინგლისურად.</h2>
        <span>ეს დაგეხმარებათ მოიზიდოთ უცხოელი სტუმრები.</span>
        <textarea
          id="description"
          name="descriptionen"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="campsite-amenities">
        <h2>რას ნახავთ აქ</h2>
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
      <div className="campsite-activities">
        <h2>რა აქტივობებით შეიძლება დაკავდეს სტუმარი.</h2>
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
      {user?.sub && <button type="submit">დამატება</button>}
    </form>
  );
};

export default MainCampsiteField;
