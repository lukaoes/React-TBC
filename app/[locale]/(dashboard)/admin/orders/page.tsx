import { getOrders } from "../../../../../actions";
import AllOrders from "../../../../../components/Admin/allOrders";

const AdminOrders = async () => {
  const orders = await getOrders();

  return (
    <div>
      <AllOrders orders={orders} />
    </div>
  );
};

export default AdminOrders;
