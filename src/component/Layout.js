import Navbar from '@/component/Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='bg-background min-w-[100%] min-h-screen noScroll overflow-y-auto'>
      <Navbar />
      <main className='pb-8 min-h-screen noScroll'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
