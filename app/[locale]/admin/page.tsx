"use server";
import { revalidatePath } from "next/cache";
import { Users, getUsers } from "../../../api";
import DeleteButton from "../../../components/Admin/deleteButton";
import EditButton from "../../../components/Admin/editButton";

const Admin = async () => {
  async function fetchUsersAndRevalidate() {
    const users = await getUsers();
    revalidatePath("/admin");
    return users;
  }

  const users = await fetchUsersAndRevalidate();

  return (
    <div>
      <div className="admin-table">
        <div className="row admin-table-header blue">
          <div className="cell">Amount</div>
          <div className="cell">ID</div>
          <div className="cell">Name</div>
          <div className="cell">Email</div>
          <div className="cell">Age</div>
          <div className="cell">Edit</div>
          <div className="cell">Delete</div>
        </div>
        {users.map((item: Users, index: number) => (
          <div className="row" key={`get-users-${index}`}>
            <div className="cell" data-title="Id">
              {index}
            </div>
            <div className="cell" data-title="Id">
              {item.id}
            </div>
            <div className="cell" data-title="Name">
              {item.name}
            </div>
            <div className="cell" data-title="Email">
              {item.email}
            </div>
            <div className="cell" data-title="amount">
              {item.age}
            </div>
            <EditButton id={item.id} />
            <div className="cell" data-title="delete">
              <DeleteButton id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
