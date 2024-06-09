"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { fetchPayments } from "../../actions";

const OrdersList = () => {
  const { user } = useUser();
  const [payments, setPayments] = useState<any[]>([]);

  console.log(payments);

  useEffect(() => {
    const fetchUserPayments = async () => {
      if (user && user.email) {
        const allPayments = await fetchPayments(user.email);
        setPayments(allPayments);
      }
    };

    fetchUserPayments();
  }, [user]);

  return (
    <div>
      <div className="user-payment-list top">
        <div>
          <div>N</div>
        </div>
        <div>
          <div>ფასი</div>
        </div>
        <div>ინვოისი</div>
      </div>
      {payments.map((payment, index) => (
        <div key={`payments-all-${index}`} className="user-payment-list">
          <div>
            <div>{index + 1}</div>
          </div>
          <div>
            <div>₾ {payment.amount / 100}</div>
          </div>
          <div>
            <a href={payment.receipt_url} target="_blank">
              ნახვა
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
