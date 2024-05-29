"use client";
import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

interface GearSelectorProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  errors: { [key: string]: string };
}

interface GearData {
  [category: string]: {
    Types: string[];
  };
}

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
  first_name: string;
  phone: string;
  [key: string]: any; // Add index signature
}

const gearData: GearData = {
  Footwear: {
    Types: ["Hiking Boots", "Sandals", "Socks"],
  },
  Clothing: {
    Types: [
      "Jackets",
      "Pants and Shorts",
      "Base Layers",
      "Mid Layers",
      "Headwear (Hats, Caps, Beanies...)",
      "Handwear (Gloves, Mittens...)",
      "Rain Gear",
    ],
  },
  "Backpacks and Bags": {
    Types: ["Hiking Backpacks", "Backpack Accessories"],
  },
  Shelter: {
    Types: ["Tents", "Tarps"],
  },
  "Sleeping Bags": {
    Types: ["Down", "Synthetic", "Seasonal"],
  },
  "Cooking and Food Storage": {
    Types: [
      "Camping Stoves",
      "Fuel and Fuel Bottles",
      "Cookware (Pots, Pans...)",
      "Portable Grills",
      "Coolers and Ice Packs",
      "Food Storage (Containers, Cutting Boards...)",
    ],
  },
  Lighting: {
    Types: [
      "Headlamps",
      "Flashlights",
      "Lanterns (Battery-Powered, Solar)",
      "String Lights",
    ],
  },
  "Navigation and Safety": {
    Types: [
      "GPS Devices",
      "Compasses",
      "First Aid Kits",
      "Emergency Gear (Whistles, Fire Starters, Emergency Blankets)",
    ],
  },
  "Climbing Gear": {
    Types: ["Ropes", "Harnesses", "Carabiners", "Climbing Shoes", "Helmets"],
  },
  Accessories: {
    Types: [
      "Sunglasses",
      "Multi-Tools",
      "Binoculars",
      "Portable Chargers",
      "Insect Repellent",
      "Poles",
    ],
  },
  "Kids' Gear": {
    Types: ["Clothing", "Footwear"],
  },
  Camping: {
    Types: [
      "Hammocks",
      "Accessories",
      "Camping Chairs",
      "Camping Tables",
      "Hammocks and Hammock Accessories",
      "Camp Kitchen Stations",
      "First Aid Kits",
      "Multi-Tools and Knives",
      "Axes and Hatchets",
      "Fire Starters (Matches, Lighters, Ferro Rods...)",
      "Whistles",
    ],
  },
  Other: {
    Types: [],
  },
};

const GearSelector: React.FC<GearSelectorProps> = ({
  formData,
  setFormData,
  errors,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subcategories, setSubcategories] = useState<string[]>([]);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFormData((prevData) => ({ ...prevData, category, subcategory: "" }));
    setSubcategories(gearData[category] ? gearData[category].Types : []);
  };

  const handleSubcategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      subcategory: event.target.value,
    }));
  };

  const renderSubcategoryInput = () => {
    if (selectedCategory === "Footwear") {
      return (
        <label>
          Shoe Size:
          <input
            type="text"
            name="shoe_size"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                shoe_size: e.target.value,
              }))
            }
          />
        </label>
      );
    } else if (selectedCategory === "Clothing") {
      return (
        <label>
          Size:
          <select
            name="clothing_size"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                clothing_size: e.target.value,
              }))
            }
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
      );
    } else if (selectedCategory === "Backpacks and Bags") {
      return (
        <label>
          Capacity (liters):
          <input
            type="text"
            name="backpack_capacity"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                backpack_capacity: e.target.value,
              }))
            }
          />
        </label>
      );
    } else if (
      selectedCategory === "Shelter" &&
      formData.subcategory === "Tents"
    ) {
      return (
        <label>
          Capacity:
          <select
            name="tent_capacity"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                tent_capacity: e.target.value,
              }))
            }
          >
            <option value="1-person">1 person</option>
            <option value="2-person">2 person</option>
            <option value="3-person">3 person</option>
            <option value="4-person">4 person</option>
            <option value="5-person">5+ person</option>
          </select>
        </label>
      );
    }
    return null;
  };

  return (
    <div>
      <label>
        Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="" disabled>
            Select a category
          </option>
          {Object.keys(gearData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category}</p>}
      </label>

      {subcategories.length > 0 && (
        <label>
          Subcategory:
          <select
            value={formData.subcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="" disabled>
              Select a subcategory
            </option>
            {subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </label>
      )}

      {renderSubcategoryInput()}
    </div>
  );
};

export default GearSelector;
