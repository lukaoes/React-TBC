"use client";
import { createRefund } from "../../actions";

const AllOrders = ({ orders }: any) => {
  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };
  console.log(orders);
  return (
    <div>
      <div className="admin-table">
        <div className="row admin-table-header blue">
          <div className="cell">თანხა</div>
          <div className="cell">ინვოისი</div>
          <div className="cell">თანხა</div>
          <div className="cell">შეკვეთის გაუქმება</div>
          <div className="cell">მისამართი</div>
        </div>

        {orders.map((order: any) => (
          <div key={order.latest_charge.id} className="row">
            <div className="cell" data-title="თანხა">
              ₾{(order.amount / 100).toFixed(2)}
            </div>
            <div className="cell" data-title="ინვოისი">
              <a
                href={order.latest_charge.receipt_url}
                aria-label="Order Receipt"
                target="_blank"
                rel="noopener noreferrer"
              >
                ნახვა
              </a>
            </div>
            <div className="cell" data-title="თანხა">
              {order.latest_charge.refunded === true
                ? "დაბრუნებულია"
                : "გადახდილია"}
            </div>
            <div className="cell" data-title="შეკვეთის გაუქმება">
              {order.latest_charge.refunded ? (
                <p>შეკვეთა გაუქმებულია</p>
              ) : (
                <button
                  disabled={order.latest_charge.refunded}
                  onClick={() => refundHandler(order.latest_charge.id)}
                >
                  შეკვეთის გაუქმება
                </button>
              )}
            </div>
            <div className="cell" data-title="მისამართი">
              <button>ნახვა</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
