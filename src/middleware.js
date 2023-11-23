import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware=async (request)=> {
  const {pathname} = request.nextUrl;
  try
  {
    let cookie = request.cookies.get('jwt-token')?.value;
    if (!cookie || cookie.startWith('Bearer'))
    {
      
      throw new Error('Invalid token')
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split('Bearer')[1], secret);
    return NextResponse.next();
  } catch (error)
  {
    console.log(error.message);
    return NextResponse.redirect(
      new URL(`/login?redirectUrl=${pathname}`, request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*'],
};
