import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const { id, name, email, age } = await request.json();

  try {
    if (!id || !name || !email) throw new Error('ID, name, and email are required');

    // Update the user's information in the database
    await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${id};`;

    // Fetch the updated user information
    const updatedUser = await sql`SELECT * FROM users WHERE id = ${id};`;

    return NextResponse.json({ user: updatedUser.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
