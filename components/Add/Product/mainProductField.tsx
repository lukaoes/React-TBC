"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import GearSelector from "./selectCategories";
import { addAdvertisement } from "../../../actions";
import { useUser } from "@auth0/nextjs-auth0/client";

interface FormData {
  user_id: string;
  type: string;
  category: string;
  subcategory: string;
  shoe_size: string;
  clothing_size: string;
  backpack_capacity: string;
  tent_capacity: string;
  main_photo: string;
  photo_urls: string[];
  title_ge: string;
  description_ge: string;
  title_en: string;
  description_en: string;
  price: string;
  negotiable: boolean;
  location: string;
  condition: string;
  quantity: string;
  first_name: string;
  phone: string;
  [key: string]: any;
}

export const cities = [
  "თბილისი",
  "აბაშა",
  "ადიგენი",
  "ამბროლაური",
  "ასპინძა",
  "ახალქალაქი",
  "ახალციხე",
  "ახმეტა",
  "ბათუმი",
  "ბაღდათი",
  "ბოლნისი",
  "ბორჯომი",
  "გარდაბანი",
  "გორი",
  "გურჯაანი",
  "დედოფლისწყარო",
  "დმანისი",
  "დუშეთი",
  "ვანი",
  "ზესტაფონი",
  "ზუგდიდი",
  "თეთრიწყარო",
  "თელავი",
  "თერჯოლა",
  "თიანეთი",
  "კასპი",
  "ლაგოდეხი",
  "ლანჩხუთი",
  "ლენტეხი",
  "მარნეული",
  "მარტვილი",
  "მესტია",
  "მცხეთა",
  "ნინოწმინდა",
  "ოზურგეთი",
  "ონი",
  "რუსთავი",
  "საგარეჯო",
  "სამტრედია",
  "საჩხერე",
  "სენაკი",
  "სიღნაღი",
  "ტყიბული",
  "ფოთი",
  "ქარელი",
  "ქედა",
  "ქობულეთი",
  "ქუთაისი",
  "სტეფანწმინდა",
  "ყვარელი",
  "შუახევი",
  "ჩოხატაური",
  "ჩხოროწყუ",
  "ცაგერი",
  "წალენჯიხა",
  "წალკა",
  "წყალტუბო",
  "ჭიათურა",
  "ხარაგაული",
  "ხაშური",
  "ხელვაჩაური",
  "ხობი",
  "ხონი",
  "ხულო",
  "ოქროყანა",
];

const MainProductField = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    user_id: "",
    type: "",
    category: "",
    subcategory: "",
    shoe_size: "",
    clothing_size: "",
    backpack_capacity: "",
    tent_capacity: "",
    main_photo: "",
    photo_urls: [],
    title_ge: "",
    description_ge: "",
    title_en: "",
    description_en: "",
    price: "",
    condition: "",
    quantity: "",
    negotiable: false,
    location: "თბილისი",
    first_name: "",
    phone: "",
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
      "type",
      "category",
      "title_ge",
      "price",
      "location",
      "condition",
      "quantity",
      "first_name",
      "phone",
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
        await addAdvertisement(formData);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="add-product-layout">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="add-product-detail-container">
            <h2>განცხადების ტიპი*</h2>
            <div className="add-product-type">
              <div>
                <input
                  type="radio"
                  name="type"
                  id="sell"
                  value="sell"
                  onChange={handleInputChange}
                />
                <label htmlFor="sell" className="form-control">
                  გაყიდვა
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  id="rent"
                  value="rent"
                  onChange={handleInputChange}
                />
                <label htmlFor="rent">გაქირავება</label>
              </div>
              {errors.type && <p>{errors.type}</p>}
            </div>
          </div>
          <div className="add-product-detail-container">
            <h2>აირჩიეთ კატეგორია*</h2>
            <GearSelector
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          </div>
        </div>
        <div className="add-product-main-img">
          <div className="add-product-detail-container">
            <h2>დაამატეთ ფოტო</h2>
            <p>
              უფრო მეტი ადამიანი დაინტერესდება განცხადებით, რომელსაც ფოტო აქვს.
            </p>
            <span>აირჩიეთ მოწყობილობიდან</span>
            <input type="file" name="file" />
            <label htmlFor="img-url">ან ატვირთეთ URL-ს გამოყენებით:</label>
            <input
              type="text"
              name="main_photo"
              id="img-url"
              onChange={handleInputChange}
            />
            <span>დამატებითი სურათები:</span>
            <div className="add-products-additional-img">
              <span>1</span>
              <input
                type="text"
                name="photo_urls"
                id="img-additional-0"
                onChange={handleInputChange}
              />
            </div>
            <div className="add-products-additional-img">
              <span>2</span>
              <input
                type="text"
                name="photo_urls"
                id="img-additional-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="add-products-additional-img">
              <span>3</span>
              <input
                type="text"
                name="photo_urls"
                id="img-additional-2"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="add-product-description">
          <div className="add-product-detail-container">
            <h2>პროდუქტის აღწერა ქართულად</h2>
            <label htmlFor="title_ge">სათაური*</label>
            <input
              type="text"
              name="title_ge"
              id="title"
              onChange={handleInputChange}
            />
            {errors.title_ge && <p>{errors.title_ge}</p>}
            <label htmlFor="description_ge">აღწერა</label>
            <textarea
              id="description"
              name="description_ge"
              onChange={handleInputChange}
              rows={5}
            ></textarea>
            <h2>პროდუქტის აღწერა ინგლისურად</h2>
            <label htmlFor="title_en">სათაური</label>
            <input
              type="text"
              name="title_en"
              id="entitle"
              onChange={handleInputChange}
            />
            <label htmlFor="description_en">აღწერა</label>
            <textarea
              id="endescription"
              name="description_en"
              onChange={handleInputChange}
              rows={5}
            ></textarea>
          </div>
        </div>

        <div className="add-product-detail-container">
          <div className="add-product-price">
            <h2>პროდუქტის ფასი*</h2>
            <label htmlFor="quantity">ფასი:</label>
            <input
              type="number"
              placeholder="ფასი"
              name="price"
              id="price"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="add-product-condition-quantity">
          <div className="add-product-detail-container">
            <div className="add-product-price">
              <h2>პროდუქტის მდგომარეობა და რაოდენობა*</h2>
              <div className="add-product-type mb-[20px]">
                <div>
                  <input
                    type="radio"
                    name="condition"
                    id="new"
                    value="new"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="new" className="form-control">
                    ახალი
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="condition"
                    placeholder="რაოდენობა"
                    id="used"
                    value="used"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="used" className="form-control">
                    მეორადი
                  </label>
                </div>
                {errors.type && <p>{errors.type}</p>}
              </div>
              <label htmlFor="quantity">რაოდენობა:</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="add-product-contact">
          <div className="add-product-detail-container">
            <h2>საკონტაქტო ინფორმაცია</h2>
            <label htmlFor="location">აირჩიეთ ლოკაცია*</label>
            <select name="location" onChange={handleInputChange}>
              {cities.map((city, index) => (
                <option key={`select-cities-${index}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.location && <p>{errors.location}</p>}
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
          </div>
        </div>
        <div className="button-container">
          {user?.sub && <button type="submit">დამატება</button>}
        </div>
      </form>
    </div>
  );
};

export default MainProductField;
