export interface Users {
  id: number,
  name: string,
  email: string,
  age: number,
}

export const BASE_URL = 'https://lukmart.vercel.app'

export async function getUsers() {
  const response = await fetch(BASE_URL + '/api/get-users')
  const { users } = await response.json()

  return users.rows
}

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: 'DELETE',
  });
}

// export async function createUser(name: string, email: string, age ) {
//   return await fetch(BASE_URL + '/api/create-user', {
//     method: 'POST',
//     body: JSON.stringify({ name, email }),
//   });
// }

// export async function createUserss(name: string, email: string, age: number) {
//   return await fetch(BASE_URL + '/api/create-user', {
//     method: 'POST',
//     body: JSON.stringify({ name, email, age }),
//   });
// }