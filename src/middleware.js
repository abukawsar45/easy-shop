import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware=async (request)=> {
  const {pathname} = request.nextUrl;
  try
  {
    let cookie = request.cookies.get('jwt-token')?.value;
    console.log({cookie})
          if (!cookie || !cookie.startsWith('Bearer ')) {
            throw new Error('Invalid token');
          }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    console.log({secret})
     await jwtVerify(cookie.split('Bearer ')[1], secret);
    return NextResponse.next();
  } catch (error)
  {
    console.log('line-20', error.message);
    return NextResponse.redirect(
      new URL(`/login?redirectUrl=${pathname}`, request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*'],
};
