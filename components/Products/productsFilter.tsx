"use client";
import Link from "next/link";
import { FC, useState, useRef } from "react";
import { cities } from "../Add/Product/mainProductField";
import ReactSlider from "react-slider";

interface ProductsFilterProps {
  minPrice: number;
  maxPrice: number;
  handlePriceChange: (values: [number, number]) => void;
  handleConditionChange: (condition: string) => void;
  handleTypeChange: (type: string) => void;
  handleLocationChange: (location: string) => void;
  getCategoryCount: (category: string) => number;
  filterState: boolean;
}

const ProductsFilter: FC<ProductsFilterProps> = ({
  minPrice,
  maxPrice,
  handlePriceChange,
  handleConditionChange,
  handleTypeChange,
  handleLocationChange,
  getCategoryCount,
  filterState,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  const sliderMinPriceRef = useRef<number>(minPrice);
  const sliderMaxPriceRef = useRef<number>(maxPrice);

  // useEffect(() => {
  //   setPriceRange([minPrice, maxPrice]);
  // }, [minPrice, maxPrice]);

  const handleSliderChange = (values: [number, number]) => {
    setPriceRange(values);
    handlePriceChange(values);
  };

  return (
    <div className={`${filterState ? "active" : ""} products-filter-container`}>
      <div className="inside-products-filter-container">
        <h3 className="products-filter-title">ფასი</h3>
        <div className="products-price-slider">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            value={priceRange}
            min={sliderMinPriceRef.current}
            max={sliderMaxPriceRef.current}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={1}
            onChange={handleSliderChange}
          />
        </div>
        <h3 className="products-filter-title">მდგომარეობა</h3>
        <div className="products-filter-condition">
          <div>
            <input
              type="radio"
              name="condition"
              id="all"
              onChange={() => handleConditionChange("")}
              defaultChecked
            />
            <label htmlFor="all">ყველა</label>
          </div>
          <div>
            <input
              type="radio"
              name="condition"
              id="new"
              onChange={() => handleConditionChange("new")}
            />
            <label htmlFor="new">ახალი</label>
          </div>
          <div>
            <input
              type="radio"
              name="condition"
              id="used"
              onChange={() => handleConditionChange("used")}
            />
            <label htmlFor="used">მეორადი</label>
          </div>
        </div>
        <h3 className="products-filter-title">ტიპი</h3>
        <div className="products-filter-type">
          <div>
            <input
              type="radio"
              name="type"
              id="all-type"
              onChange={() => handleTypeChange("")}
              defaultChecked
            />
            <label htmlFor="all-type">ყველა</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="sell"
              onChange={() => handleTypeChange("sell")}
            />
            <label htmlFor="sell">იყიდება</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="rent"
              onChange={() => handleTypeChange("rent")}
            />
            <label htmlFor="rent">ქირავდება</label>
          </div>
        </div>
        <h3 className="products-filter-title">კატეგორია</h3>
        <ul className="products-filter-list">
          {[
            "ფეხსაცმელი",
            "ტანსაცმელი",
            "ზურგჩანთები და ჩანთები",
            "თავშესაფარი",
            "საძილე ტომარა",
            "სამზარეულო და კონტეინერები",
            "განათება",
            "ნავიგაცია და უსაფრთხოება",
            "საცოცი აღჭურვილობა",
            "აქსესუარები",
            "ბავშვების აღჭურვილობა",
            "პიკნიკი",
            "სხვა",
          ].map((category, index) => (
            <li key={`category-${index}`}>
              <Link href="">{category}</Link>
              <span>({getCategoryCount(category)})</span>
            </li>
          ))}
        </ul>
        <h3 className="products-filter-title">მდებარეობა</h3>
        <select
          className="products-city-select"
          onChange={(e) => handleLocationChange(e.target.value)}
          defaultValue=""
        >
          <option value="">ყველა</option>
          {cities.map((city, index) => (
            <option key={`select-cities-products-page-${index}`} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
