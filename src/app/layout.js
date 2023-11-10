import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';




// const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata = {
  title: 'Easy Shop',
  description: 'Easy Shop is an e-commerce web application',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme='dark' className='transition-all' >
      <body className={ classNames(
        roboto.variable,
        'container mx-auto px-2 font-roboto'
      ) }>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <Navbar />
            <main className='mt-5' >
        { children }
            </main>
          </div>
          <Footer/>
      </body>
    </html>
  )
};


export default RootLayout;