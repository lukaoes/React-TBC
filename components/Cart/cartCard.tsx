import Image from "next/image";

const CartCard = () => {
  return (
    <div>
      <div className="cart-wrapper" id="card_0">
        <div className="cart-hero">
          <span>
            <Image
              width={120}
              height={120}
              src="https://media.veli.store/media/__sized__/product/8683650070535-1-thumbnail-200x200-95.jpg"
              alt="Karaca, საჭრელი დაფა, 22 სმ"
            />
          </span>
        </div>
        <div className="cart-main">
          <div className="cart-text">
            <a href="/details/karaca-%E1%83%A1%E1%83%">
              Karaca, საჭრელი დაფა, 22 სმ
            </a>
            <div className="cart-pricing-checkout">
              <h3>39.20 ₾</h3>
              <span className="old-price">49.00 ₾</span>
              <span className="sale">-20%</span>
            </div>
          </div>
          <div className="cart-stats">
            <div className="cart-qty">
              <button>– </button>
              <input
                type="number"
                name="qty"
                min="1"
                max="11"
                className="cart-qty_0"
                value="1"
              />
              <button>+ </button>
            </div>
            <div className="cart-pricing ">
              <h3 className="price">39.20 ₾</h3>
              <span className="old-price">49.00 ₾</span>
              <span className="sale">-20%</span>
            </div>
          </div>
        </div>
        <div className="cart-end">
          <button className="cart-delete">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3.75H2.33333H13"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.33398 3.74992V2.41659C4.33398 2.06296 4.47446 1.72382 4.72451 1.47378C4.97456 1.22373 5.3137 1.08325 5.66732 1.08325H8.33398C8.68761 1.08325 9.02674 1.22373 9.27679 1.47378C9.52684 1.72382 9.66732 2.06296 9.66732 2.41659V3.74992M11.6673 3.74992V13.0833C11.6673 13.4369 11.5268 13.776 11.2768 14.0261C11.0267 14.2761 10.6876 14.4166 10.334 14.4166H3.66732C3.3137 14.4166 2.97456 14.2761 2.72451 14.0261C2.47446 13.776 2.33398 13.4369 2.33398 13.0833V3.74992H11.6673Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
