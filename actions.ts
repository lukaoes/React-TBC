'use server'

import { BASE_URL, deleteUser } from "./api";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);

  const response = await fetch(BASE_URL + '/api/create-user', {
    method: 'POST',
    body: JSON.stringify({ name, email, age }),
  });

  return response
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}