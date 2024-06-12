import { getOrders } from "../../../../../actions";
import OrdersList from "../../../../../components/Profile/ordersList";

const Orders = async () => {
  const orders = await getOrders();
  return (
    <div className="profile-form">
      <h1>ჩემი შეკვეთები</h1>
      <OrdersList orders={orders} />
    </div>
  );
};

export default Orders;
