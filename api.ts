export interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();

  return users.rows;
}

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function getUserCart(userId: number) {
  const response = await fetch(BASE_URL + `/api/cart/get-cart/${userId}`, {
    cache: "no-store",
  });
  const carts = await response.json();

  const [cart] = carts.carts.rows;

  return cart;
}

export async function getProducts() {
  const response = await fetch(BASE_URL + "/api/products/get-products");
  const data = await response.json();

  const products = data.users.rows;

  return products;
}

export async function getUsersAuth() {
  const response = await fetch(BASE_URL + "/api/users/get-users");
  const { users } = await response.json();

  return users.rows;
}
