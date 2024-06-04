import Image from "next/image";
import { getNicknameAction, getPictureAction } from "../../actions";
import { getCurrentLocale } from "../../locales/server";
import { Product } from "../../types";
import Link from "next/link";

interface IProduct {
  product: Product;
}

const SingleProdMainDescription = async ({ product }: IProduct) => {
  const locale = getCurrentLocale();
  const userPic = await getPictureAction(product.user_id);
  const userNickname = await getNicknameAction(product.user_id);
  return (
    <div className="single-prod-main-description">
      <div className="small-details">
        <div>
          <span>ID: {product.id}</span>
          <span className="small-details-created-at">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#455A64"
              />
              <path
                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                fill="#455A64"
              />
            </svg>{" "}
            {product.created_at.slice(0, 10)}
          </span>
        </div>
        {/* <div>
          <span>{product.condition === "used" ? "მეორადი" : "ახალი"}</span>
          <span>{product.type === "sell" ? "იყიდება" : "ქირავდება"}</span>
        </div> */}
      </div>

      <h1 className="single-prod-main-title">
        {locale === "ge"
          ? product.title_ge
            ? product.title_ge
            : product.title_en
          : product.title_en
          ? product.title_en
          : product.title_ge}
      </h1>

      <div className="single-prod-labels">
        <span>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.414 5.586l-11 11a2 2 0 000 2.828l8.172 8.172a2 2 0 002.828 0l11-11A2 2 0 0027 15.172V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586zM10 19l5.5-5.5M13 22l2.5-2.5"
            ></path>
            <path fill="#ffffff" d="M23 10a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>{" "}
          {product.type === "sell" ? "იყიდება" : "ქირავდება"}{" "}
        </span>
        <span>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.414 5.586l-11 11a2 2 0 000 2.828l8.172 8.172a2 2 0 002.828 0l11-11A2 2 0 0027 15.172V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586zM10 19l5.5-5.5M13 22l2.5-2.5"
            ></path>
            <path fill="#ffffff" d="M23 10a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>{" "}
          {product.condition === "used" ? "მეორადი" : "ახალი"}
        </span>
      </div>

      <p className="single-prod-main-desc">
        {" "}
        {locale === "ge"
          ? product.description_ge
            ? product.description_ge
            : product.description_en
          : product.description_en
          ? product.description_en
          : product.description_ge}
      </p>

      <div className="single-prod-user">
        <div className="user-details-product">
          <Link href={`/user/${userNickname[0].nickname}`}>
            <Image src={userPic[0].picture} alt="aa" width={60} height={60} />
          </Link>

          <Link href={`/user/${userNickname[0].nickname}`}>
            {userNickname[0].nickname} <br /> <span>ყველა განცხადება</span>
          </Link>
        </div>
        <div>
          <h2>
            <svg
              fill="#455A64"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="15px"
              height="15px"
              viewBox="0 0 395.71 395.71"
              xmlSpace="preserve"
            >
              <g>
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>
              </g>
            </svg>
            {product.location}
          </h2>
        </div>
        <div className="user-name-phone">
          <p>
            <svg
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 473.806 473.806"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z"
                  />
                  <path
                    d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z"
                  />
                  <path
                    d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                  />
                </g>
              </g>
            </svg>
            {product.phone}
          </p>
          <span>{product.first_name}</span>
        </div>
      </div>

      <div className="stock-and-stuff">
        {product.location && (
          <p>
            მდებარეობა: <span>{product.location}</span>
          </p>
        )}
        {product.category && (
          <p>
            კატეგორია: <span>{product.category}</span>
          </p>
        )}
        {product.subcategory && (
          <p>
            ქვეკატეგორია: <span>{product.subcategory}</span>
          </p>
        )}
        {product.shoe_size && (
          <p>
            ფეხსაცმლის ზომა: <span>{product.shoe_size}</span>
          </p>
        )}
        {product.clothing_size && (
          <p>
            ტანსაცმლის ზომა: <span>{product.clothing_size}</span>
          </p>
        )}
        {product.backpack_capacity && (
          <p>
            ზურგჩანტთის მოცულობა: <span>{product.backpack_capacity} ლიტრი</span>
          </p>
        )}
        {product.tent_capacity && (
          <p>
            კარავის ტევადობა:{" "}
            <span>{product.tent_capacity.replace("-person", "")} ადამიანი</span>
          </p>
        )}
        {product.quantity && (
          <p>
            მარაგშია: <span>{product.quantity} ცალი</span>
          </p>
        )}
      </div>

      <div className="single-prod-main-price">
        <span>
          {product.negotiable
            ? "ფასი შეთანხმებით"
            : product.type === "sell"
            ? `${product.price} ₾`
            : `${product.price} ₾/დღე`}
        </span>
        <button>კალათში დამატება</button>
      </div>
    </div>
  );
};

export default SingleProdMainDescription;
