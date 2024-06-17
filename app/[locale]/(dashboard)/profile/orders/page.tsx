import { getOrders } from "../../../../../actions";
import OrdersList from "../../../../../components/Profile/ordersList";
import { getI18n } from "../../../../../locales/server";

const Orders = async () => {
  const orders = await getOrders();
  const t = await getI18n();
  return (
    <div className="profile-form">
      <h1>{t("profile.myOrders")}</h1>
      <OrdersList orders={orders} />
    </div>
  );
};

export default Orders;
