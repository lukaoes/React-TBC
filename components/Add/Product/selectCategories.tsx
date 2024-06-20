"use client";
import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { useScopedI18n } from "../../../locales/client";

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
  condition: string;
  quantity: string;
  negotiable: boolean;
  location: string;
  first_name: string;
  phone: string;
  [key: string]: any; // Add index signature
}

const gearData: GearData = {
  ფეხსაცმელი: {
    Types: ["სალაშქრო ფეხსაცმელები", "სანდალები", "წინდები"],
  },
  ტანსაცმელი: {
    Types: [
      "ჟაკეტი",
      "შარვალი და შორტი",
      "Base ფენა",
      "Mid ფენა",
      "ქუდები (ქუდი, კიპი...)",
      "ხელთათმანი",
      "წვიმის აღჭურვილობა",
    ],
  },
  "ზურგჩანთები და ჩანთები": {
    Types: ["სალაშქრო ზურგჩანთები", "ზურგჩანთის აქსესუარები"],
  },
  თავშესაფარი: {
    Types: ["კარავი", "ტარპი"],
  },
  "საძილე ტომარა": {
    Types: ["პოლიესტერი", "ბამბა", "საძილე ტომარაში ჩასაფენი"],
  },
  "სამზარეულო და კონტეინერები": {
    Types: [
      "გაზქურა",
      "გაზქურის საწვავი",
      "ჭურჭელი (ტაფა, ჭიქა...)",
      "პორტატული მაყალი",
      "ქულერები",
      "საჭმლის კონტეინერები",
    ],
  },
  განათება: {
    Types: ["თავის სანათი", "ფანარი"],
  },
  "ნავიგაცია და უსაფრთხოება": {
    Types: ["GPS მოწყობილობა", "კომპასი", "პირველადი დახმარება"],
  },
  "საცოცი აღჭურვილობა": {
    Types: ["თოკები", "წერაყინი", "კარაბინი", "საცოცი ფეხსაცმელი", "ჩაფხუტი"],
  },
  აქსესუარები: {
    Types: [
      "მზის სათვალე",
      "ხელსაწყოები",
      "ბინოკლი",
      "პორტატული დამტენი",
      "ჯოხები",
    ],
  },
  "ბავშვების აღჭურვილობა": {
    Types: ["ტანსაცმელი", "ფეხსაცმელი"],
  },
  პიკნიკი: {
    Types: [
      "ჰამაკი",
      "აქსესუარები",
      "სკამები",
      "მაგიდები",
      "საპიკნიკე სამზარეულო",
      "დანები და ცულები",
      "ასანთი, სანთებელა...",
    ],
  },
  სხვა: {
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
  const t = useScopedI18n("addProduct");

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
    if (selectedCategory === "ფეხსაცმელი") {
      return (
        <label>
          <span>{t("shoeSize")}:</span> <br />
          <input
            type="text"
            placeholder={t("shoeSize")}
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
    } else if (selectedCategory === "ტანსაცმელი") {
      return (
        <label>
          <span>{t("size")}:</span> <br />
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
    } else if (selectedCategory === "ზურგჩანთები და ჩანთები") {
      return (
        <label>
          <span>{t("capacityLiters")}:</span> <br />
          <input
            type="text"
            name="backpack_capacity"
            placeholder={t("capacity")}
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
      selectedCategory === "თავშესაფარი" &&
      formData.subcategory === "კარავი"
    ) {
      return (
        <label>
          <span>{t("capacity")}:</span> <br />
          <select
            name="tent_capacity"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                tent_capacity: e.target.value,
              }))
            }
          >
            <option value="1-person">1 {t("person")}</option>
            <option value="2-person">2 {t("person")}</option>
            <option value="3-person">3 {t("person")}</option>
            <option value="4-person">4 {t("person")}</option>
            <option value="5-person">5+ {t("person")}</option>
          </select>
        </label>
      );
    }
    return null;
  };

  return (
    <div className="add-product-category">
      <label>
        <span>{t("category")}:</span> <br />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="" disabled>
            {t("chooseCategory")}
          </option>
          {Object.keys(gearData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 mt-[4px]">{errors.category}</p>
        )}
      </label>

      {subcategories.length > 0 && (
        <label>
          <span>{t("subcategory")}:</span> <br />
          <select
            value={formData.subcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="" disabled>
              {t("chooseSubcategory")}
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
