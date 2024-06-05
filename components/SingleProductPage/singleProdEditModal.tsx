"use client";

import { useState } from "react";
import { Product } from "../../types";
import { cities } from "../Add/Product/mainProductField";
import { updateProductAction } from "../../actions";

interface EditModalProps {
  product: Product;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const SingleProdEditModal = ({ product, onClose, onSave }: EditModalProps) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const [error, setError] = useState<string | null>(null);
  console.log("editedProduct", editedProduct);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEditedProduct({ ...editedProduct, [name]: checked });
  };

  const handleSave = async () => {
    try {
      const updatedProduct = await updateProductAction(editedProduct);
      onSave(updatedProduct);
    } catch (error) {
      setError("Failed to update product. Please try again.");
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="single-product-edit-modal">
      <div className="single-product-edit-content">
        <h2>პროდუქტის რედაქტირება</h2>
        <form>
          <label>
            სათაური
            <input
              type="text"
              name="title_ge"
              value={editedProduct.title_ge}
              onChange={handleChange}
            />
          </label>
          <label>
            სათაური ინგლისურად
            <input
              type="text"
              name="title_en"
              value={editedProduct.title_en}
              onChange={handleChange}
            />
          </label>
          <label>
            აღწერა
            <textarea
              rows={5}
              name="description_ge"
              value={editedProduct.description_ge}
              onChange={handleChange}
            />
          </label>
          <label>
            აღწერა ინგლისურად
            <textarea
              rows={5}
              name="description_en"
              value={editedProduct.description_en}
              onChange={handleChange}
            />
          </label>
          <label>
            ფასი
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
            />
          </label>
          <label>
            ფასი შეთანხმებით
            <input
              type="checkbox"
              name="negotiable"
              checked={editedProduct.negotiable}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            მდებარეობა
            <select
              name="location"
              value={editedProduct.location}
              onChange={handleChange}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label>
            დგომარეობა
            <select
              name="condition"
              value={editedProduct.condition}
              onChange={handleChange}
            >
              <option value="used">მეორადი</option>
              <option value="new">ახალი</option>
            </select>
          </label>
          <label>
            განცხადების ტიპი
            <select
              name="type"
              value={editedProduct.type}
              onChange={handleChange}
            >
              <option value="sell">იყიდება</option>
              <option value="rent">ქირავდება</option>
            </select>
          </label>
          <label>
            სახელი:
            <input
              type="text"
              name="first_name"
              value={editedProduct.first_name}
              onChange={handleChange}
            />
          </label>
          <label>
            ტელეფონი
            <input
              type="number"
              name="phone"
              value={editedProduct.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            რაოდენობა
            <input
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleChange}
            />
          </label>
          {editedProduct.backpack_capacity !== null && (
            <label>
              ზურჩანტის ტევადობა
              <input
                type="number"
                name="backpack_capacity"
                value={editedProduct.backpack_capacity || ""}
                onChange={handleChange}
              />
            </label>
          )}
          {editedProduct.clothing_size !== null && (
            <label>
              ტანსაცმლის ზომა
              <select
                name="clothing_size"
                value={editedProduct.clothing_size || ""}
                onChange={handleChange}
              >
                <option value="XXS">XXS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </label>
          )}
          {editedProduct.shoe_size !== null && (
            <label>
              ფეხსაცმლის ზომა
              <input
                type="number"
                name="shoe_size"
                value={editedProduct.shoe_size || ""}
                onChange={handleChange}
              />
            </label>
          )}
          {editedProduct.tent_capacity !== null && (
            <label>
              კარავის ტევადობა
              <select
                name="tent_capacity"
                value={editedProduct.tent_capacity || ""}
                onChange={handleChange}
              >
                <option value="1-person">1 კაცი</option>
                <option value="2-person">2 კაცი</option>
                <option value="3-person">3 კაცი</option>
                <option value="4-person">4 კაცი</option>
                <option value="5-person">5+ კაცი</option>
              </select>
            </label>
          )}
          <label>
            მთავარი ფოტო:
            <input
              type="text"
              name="main_photo"
              value={editedProduct.main_photo}
              onChange={handleChange}
            />
          </label>
          {editedProduct.photo_urls && editedProduct.photo_urls.length > 0 && (
            <div>
              {editedProduct.photo_urls.map((url, index) => (
                <label key={index}>
                  ფოტო {index + 1}:
                  <input
                    type="text"
                    name={`photo_url_${index}`}
                    value={url}
                    onChange={(e) => {
                      const newPhotoUrls = [...editedProduct.photo_urls];
                      newPhotoUrls[index] = e.target.value;
                      setEditedProduct({
                        ...editedProduct,
                        photo_urls: newPhotoUrls,
                      });
                    }}
                  />
                </label>
              ))}
              {editedProduct.photo_urls.length > 3 && (
                <label>
                  დამატებითი ფოტოები
                  <textarea
                    rows={5}
                    name="additional_photos"
                    value={editedProduct.photo_urls.slice(3).join(", ")}
                    readOnly
                  />
                </label>
              )}
            </div>
          )}
          <div className="single-prod-edit-modal-buttons">
            <button type="button" onClick={handleSave}>
              შენახვა
            </button>
            <button type="button" onClick={onClose}>
              გათიშვა
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SingleProdEditModal;
