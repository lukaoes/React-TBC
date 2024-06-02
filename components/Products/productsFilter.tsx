"use client";
import Link from "next/link";
import { cities } from "../Add/Product/mainProductField";

const ProductsFilter = () => {
  return (
    <div className="products-filter-container">
      <div>
        <h3 className="products-filter-title">ფასი</h3>
        <div>120132</div>
        <h3 className="products-filter-title">კატეგორია</h3>
        <ul className="products-filter-list">
          <li>
            <Link href="">ფეხსაცმელი</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">ტანსაცმელი</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">ზურგჩანთები და ჩანთები</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">თავშესაფარი</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">საძილე ტომარა</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">სამზარეულო და კონტეინერები</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">განათება</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">ნავიგაცია და უსაფრთხოება</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">საცოცი აღჭურვილობა</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">აქსესუარები</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">ბავშვების აღჭურვილობა</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">პიკნიკი</Link>
            <span>(0)</span>
          </li>
          <li>
            <Link href="">სხვა</Link>
            <span>(0)</span>
          </li>
        </ul>

        <h3 className="products-filter-title">მდებარეობა</h3>

        <select className="products-city-select">
          <option disabled>აირჩიეთ ქალაქი</option>
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
