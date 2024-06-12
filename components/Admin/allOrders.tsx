"use client";
import { useState } from "react";
import { createRefund, getAddyByEmailAction } from "../../actions";

const AllOrders = ({ orders }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  console.log(address);

  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };

  const handleViewAddress = async (email: string) => {
    setLoading(true);
    try {
      const fetchedAddress = await getAddyByEmailAction(email);
      setAddress(fetchedAddress);
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress(null);
    }
    setLoading(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setAddress(null);
  };

  console.log(orders);

  return (
    <div className="admin-inbox">
      <h1>ყველა შეკვეთა</h1>
      <div className="admin-table">
        <div className="row admin-table-header blue">
          <div className="cell">თანხა</div>
          <div className="cell">ინვოისი</div>
          <div className="cell">სტატუსი</div>
          <div className="cell">შეკვეთა</div>
          <div className="cell">მისამართი</div>
        </div>

        {orders.map((order: any) => (
          <div key={order.latest_charge.id} className="row">
            <div className="cell" data-title="თანხა">
              ₾ {(order.amount / 100).toFixed(2)}
            </div>
            <div className="cell" data-title="ინვოისი">
              <a
                href={order.latest_charge.receipt_url}
                aria-label="Order Receipt"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                ნახვა
              </a>
            </div>
            <div className="cell" data-title="სტატუსი">
              {order.latest_charge.refunded === true
                ? "დაბრუნებულია"
                : "გადახდილია"}
            </div>
            <div className="cell" data-title="შეკვეთის გაუქმება">
              {order.latest_charge.refunded ? (
                <p>გაუქმებულია</p>
              ) : (
                <button
                  className="underline"
                  disabled={order.latest_charge.refunded}
                  onClick={() => refundHandler(order.latest_charge.id)}
                >
                  გაუქმება
                </button>
              )}
            </div>
            <div className="cell" data-title="მისამართი">
              <button
                className="underline"
                onClick={() =>
                  handleViewAddress(order.latest_charge.billing_details.email)
                }
              >
                ნახვა
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <>
          <div
            className="main-product-card-modal-container-bg"
            onClick={closeModal}
          ></div>
          <div className="admin-orders-modal">
            <div className="admin-orders-modal-content">
              {loading ? (
                <p>Loading...</p>
              ) : (
                address && (
                  <div>
                    <h2>მისამართი</h2>
                    <p>
                      სრული სახელი:{" "}
                      <span>
                        {" "}
                        {address[0].first_name} {address[0].last_name}
                      </span>
                    </p>
                    <p>
                      ქვეყანა: <span>{address[0].country}</span>
                    </p>
                    <p>
                      ქალაქი: <span>{address[0].city}</span>
                    </p>
                    <p>
                      ქუჩა: <span>{address[0].street_address}</span>
                    </p>
                    <p>
                      საფოსტო კოდი: <span>{address[0].postal_code}</span>
                    </p>
                    <p>
                      ტელეფონი: <span>{address[0].phone}</span>
                    </p>
                    <p>
                      ელ-ფოსტა: <span>{address[0].email}</span>
                    </p>
                  </div>
                )
              )}
              <button className="close" onClick={closeModal}>
                დახურვა
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllOrders;
