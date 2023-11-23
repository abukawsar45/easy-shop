import { cookies } from "next/headers";
import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';


export const POST = async (request) => {
  const body = await request.json();

  const secret = new TextEncoder().encode(process.env.jwt_secret);
  const alg = 'HS256';
  

  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('45d')
    .sign(secret);

  console.log(jwt);

  cookies().set({
    name: 'jwt-token',
    value: `bearer ${jwt}`,
    secure: true,
    httpOnly: true
  });

  return NextResponse.json({ message: 'Token created' });
}