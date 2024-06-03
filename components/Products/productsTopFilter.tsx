"use client";
import { FC, useEffect } from "react";

interface ProductsTopFilterProps {
  gridView: boolean;
  setGridView: React.Dispatch<React.SetStateAction<boolean>>;
  sortByPrice: (order: "high-low" | "low-high") => void; // Update function signature
  sortByDate: (order: "new-old" | "old-new") => void; // Update function signature
}
const ProductsTopFilter: FC<ProductsTopFilterProps> = ({
  gridView,
  setGridView,
  sortByPrice,
  sortByDate,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setGridView(true);
      } else {
        setGridView(gridView);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [gridView, setGridView]);

  return (
    <div className="products-top-filter-container">
      <div className="products-top-filter-left">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.95894 19.1653L3.95894 16.8855C5.61448 16.4356 6.5918 14.7287 6.14185 13.0732C5.85285 12.0099 5.02223 11.1793 3.95894 10.8903L3.95894 0.833805C3.95894 0.373617 3.58589 0.000566326 3.1257 0.000566346C2.66551 0.000566366 2.29247 0.373617 2.29247 0.833805L2.29247 10.8903C0.636889 11.3403 -0.340436 13.0471 0.109519 14.7026C0.398514 15.7659 1.22913 16.5965 2.29243 16.8855L2.29243 19.1653C2.29243 19.6255 2.66548 19.9985 3.12566 19.9985C3.58585 19.9985 3.95894 19.6255 3.95894 19.1653Z"
            fill="black"
          />
          <path
            d="M9.34305 0.834293L9.34305 3.11407C7.68775 3.56312 6.70988 5.26901 7.15889 6.92431C7.44758 7.98846 8.27886 8.81979 9.34305 9.10847L9.34305 19.1658C9.34305 19.626 9.7161 19.999 10.1763 19.999C10.6365 19.999 11.0095 19.626 11.0095 19.1658L11.0095 9.10847C12.6648 8.65941 13.6427 6.95353 13.1937 5.29822C12.905 4.23407 12.0737 3.40275 11.0095 3.11406L11.0095 0.834293C11.0095 0.374105 10.6365 0.00105461 10.1763 0.00105463C9.7161 0.00105465 9.34305 0.374105 9.34305 0.834293Z"
            fill="black"
          />
          <path
            d="M16.3959 0.834293L16.3959 10.8908C14.7404 11.3407 13.7631 13.0476 14.213 14.7031C14.502 15.7664 15.3327 16.597 16.3959 16.886L16.3959 19.1658C16.3959 19.626 16.769 19.999 17.2292 19.999C17.6894 19.999 18.0624 19.626 18.0624 19.1658L18.0624 16.886C19.718 16.4361 20.6953 14.7292 20.2453 13.0737C19.9563 12.0104 19.1257 11.1798 18.0624 10.8908L18.0624 0.834293C18.0624 0.374105 17.6894 0.00105461 17.2292 0.00105463C16.769 0.00105465 16.3959 0.374105 16.3959 0.834293Z"
            fill="black"
          />
        </svg>
        <span>ფილტრი</span>
      </div>
      <div className="products-top-filter-right">
        <div className="products-top-filter-search">
          <input type="text" name="search" placeholder="პროდუქტის ძიება..." />
        </div>
        <div className="products-top-filter-sort-right">
          <div className="products-top-filter-sort">
            <div className="products-top-filter-sort">
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  const option = value.split(":");
                  if (option.length === 2) {
                    const type = option[0] as "price" | "date";
                    const order = option[1] as
                      | "high-low"
                      | "low-high"
                      | "new-old"
                      | "old-new";
                    if (
                      type === "price" &&
                      (order === "high-low" || order === "low-high")
                    ) {
                      sortByPrice(order);
                    } else if (
                      type === "date" &&
                      (order === "new-old" || order === "old-new")
                    ) {
                      sortByDate(order);
                    }
                  }
                }}
              >
                <option value="">სორტირება</option>
                <option value="price:low-high">ფასი: მცირე-დიდი</option>
                <option value="price:high-low">ფასი: დიდი-მცირე</option>
                <option value="date:new-old">თარიღი: ახალი-ძველი</option>
                <option value="date:old-new">თარიღი: ძველი-ახალი</option>
              </select>
            </div>
          </div>
          <div className="products-top-filter-view">
            <button
              onClick={() => setGridView(false)}
              disabled={
                typeof window !== "undefined" && window.innerWidth < 1100
              }
              className={
                typeof window !== "undefined" && window.innerWidth < 1100
                  ? "cursor-not-allowed"
                  : ""
              }
              style={
                !gridView ? { opacity: 1, color: "black" } : { opacity: 0.6 }
              }
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.99984H5V10.9998H0V5.99984ZM20 5.99984H6.66667V10.9998H20V5.99984ZM6.66667 4.33317H20V2.6665C20 1.28817 18.8783 0.166504 17.5 0.166504H6.66667V4.33317ZM5 4.33317V0.166504H2.5C1.12167 0.166504 0 1.28817 0 2.6665V4.33317H5ZM6.66667 12.6665V16.8332H20V12.6665H6.66667ZM5 12.6665H0V16.8332H5V12.6665Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={() => setGridView(true)}
              style={
                gridView ? { opacity: 1, color: "black" } : { opacity: 0.6 }
              }
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33332 0.5H5.83332C7.67426 0.5 9.16664 1.99238 9.16664 3.83332V6.33332C9.16664 8.17426 7.67426 9.66664 5.83332 9.66664H3.33332C1.49238 9.66668 0 8.1743 0 6.33332V3.83332C0 1.99238 1.49238 0.5 3.33332 0.5Z"
                  fill="black"
                />
                <path
                  d="M14.1663 0.5H16.6663C18.5073 0.5 19.9996 1.99238 19.9996 3.83332V6.33332C19.9996 8.17426 18.5073 9.66664 16.6663 9.66664H14.1663C12.3254 9.66664 10.833 8.17426 10.833 6.33332V3.83332C10.833 1.99238 12.3254 0.5 14.1663 0.5Z"
                  fill="black"
                />
                <path
                  d="M3.33332 11.3335H5.83332C7.67426 11.3335 9.16664 12.8259 9.16664 14.6668V17.1668C9.16664 19.0078 7.67426 20.5001 5.83332 20.5001H3.33332C1.49238 20.5002 0 19.0078 0 17.1669V14.6669C0 12.8259 1.49238 11.3335 3.33332 11.3335Z"
                  fill="black"
                />
                <path
                  d="M14.1663 11.3335H16.6663C18.5073 11.3335 19.9996 12.8259 19.9996 14.6668V17.1668C19.9996 19.0078 18.5073 20.5002 16.6663 20.5002H14.1663C12.3254 20.5002 10.833 19.0078 10.833 17.1669V14.6669C10.833 12.8259 12.3254 11.3335 14.1663 11.3335Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTopFilter;
