"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL, deleteUser } from "./api";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);

  await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
  revalidatePath("/admin/add");

  // return response
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function editUser(id: number, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${BASE_URL}/api/edit-user/${id}?name=${name}&email=${email}&age=${age}`,
    {
      method: "PUT",
    }
  );

  revalidatePath("/admin");
}

export const handleProductRemove = async (productId: string) => {
  await fetch(`${BASE_URL}/api/cart/single-remove`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 2,
      productId,
    }),
  });
  revalidatePath("/cart");
};

export const handleQuantityChange = async (
  productId: string,
  quantityChange: number
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 2,
        productId,
        quantity: quantityChange,
      }),
    });
    revalidatePath("/cart");

    if (response.ok) {
      const inputElement = document.getElementById(
        `qty-${productId}`
      ) as HTMLInputElement;
      if (inputElement) {
        const currentValue = parseInt(inputElement.value);
        inputElement.value = (currentValue + quantityChange).toString();
      }
    } else {
      console.error("Error updating quantity:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export const handleAddToCart = async (productId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 2,
        productId: productId,
        quantity: 1,
      }),
    });
    revalidatePath("/");

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export async function getPictureAction(sid: string) {
 
  await fetch(BASE_URL + "/api/get-user-picture/", {
    method: "POST",
    body: JSON.stringify({ sid }),
  });
  revalidatePath("/profile");
 
}
export async function changePictureAction(sid: string, picture:string) {
 
  await fetch(BASE_URL + "/api/change-user-picture/", {
    method: "POST",
    body: JSON.stringify({ sid, picture }),
  });
  revalidatePath("/profile");
 
}

