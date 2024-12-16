import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Theme } from '@/components/Theme';

import '@/fonts/simple-line-icons.min.css';
import '@/components/app.css';

export function App() {
  const { pathname } = useLocation();

  // Scroll to the top of the page on page transition.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Theme>
      <div
        className="app"
        data-name={App.name}
        data-version={import.meta.env.APP_VERSION}
      >
        <ScrollToTopButton />
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Theme>
  );
}
