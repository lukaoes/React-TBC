"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { createRefund } from "../../actions";
import { useScopedI18n } from "../../locales/client";

const OrdersList = ({ orders }: any) => {
  const { user } = useUser();
  const email = user?.email;
  const t = useScopedI18n("profile");

  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };

  const filteredOrders = orders.filter(
    (order: any) => order.latest_charge.billing_details.email === email
  );

  return (
    <div className="user-orders-layout">
      <div className="admin-table">
        <div className="row admin-table-header blue">
          <div className="cell">{t("amount")}</div>
          <div className="cell">{t("invoice")}</div>
          <div className="cell">{t("transaction")}</div>
          <div className="cell">{t("cancelOrder")}</div>
        </div>

        {filteredOrders.map((order: any) => (
          <div key={order.latest_charge.id} className="row">
            <div className="cell" data-title={t("amount")}>
              ₾{(order.amount / 100).toFixed(2)}
            </div>
            <div className="cell" data-title={t("invoice")}>
              <a
                href={order.latest_charge.receipt_url}
                aria-label="Order Receipt"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("see")}
              </a>
            </div>
            <div className="cell" data-title={t("transaction")}>
              {order.latest_charge.refunded === true
                ? t("refunded")
                : t("paid")}
            </div>
            <div className="cell" data-title={t("orderCanceled")}>
              {order.latest_charge.refunded ? (
                <p>{t("orderCanceled")}</p>
              ) : (
                <button
                  disabled={order.latest_charge.refunded}
                  onClick={() => refundHandler(order.latest_charge.id)}
                >
                  {t("cancelOrder")}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
