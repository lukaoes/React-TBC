'use server'

import { revalidatePath } from "next/cache";
import { BASE_URL, deleteUser } from "./api";

export async function createUserAction(formData: FormData) {
  revalidatePath("/admin")

  const { name, email, age } = Object.fromEntries(formData);

  const response = await fetch(BASE_URL + '/api/create-user', {
    method: 'POST',
    body: JSON.stringify({ name, email, age }),
  });

  return response

}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin")
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

  revalidatePath("/admin")
}