import { Cookie } from "next/headers";


export const POST = async (request) => {
  const body = await request.json();

  const secret = new TextEncoder().encode(process.env.jwt_secret);
  const alg = 'HS256';
  

  const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);

  console.log(jwt);

  cookies({
    name: 'jwt-token',
    value: `bearer ${jwt}`,
    secure: true,
    httpOnly: true
  })
}