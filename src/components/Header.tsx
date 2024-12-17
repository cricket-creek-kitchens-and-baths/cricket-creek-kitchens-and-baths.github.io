import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { MenuButton } from '@/components/MenuButton';
import { ServicesPopper } from '@/components/ServicesPopper';
import { ThemeToggle } from '@/components/ThemeToggle';
import { email, phone, title } from '@/content';
import { useXLargeBreakpoint } from '@/hooks/useBreakpoint';
import { Route } from '@/routes';

import '@/components/header.css';

export function Header() {
  const isXLarge = useXLargeBreakpoint();

  return (
    <header className="header" data-name={Header.name}>
      <div className="header-topbar">
        <div className="header-topbar-content">
          <Link href={`tel:${phone}`}>
            <span className="icon-phone"></span>
            <div>{phone}</div>
          </Link>
          <Link href={`mailto:${email}`}>
            <span className="icon-envelope-letter"></span>
            <div>{email}</div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="header-nav">
        <div className="header-nav-content">
          <Link
            aria-label={title}
            className="header-nav-link"
            route={Route.Home}
          >
            <Image
              alt={title}
              className="logo"
              draggable={false}
              src="images/logo.png"
            />
            <Image
              aria-hidden={true}
              className="logo-overlay"
              draggable={false}
              src="images/logo-overlay.png"
            />
          </Link>

          {isXLarge ? (
            <div className="header-nav-links">
              <Link route={Route.Home}>Home</Link>
              <Link route={Route.About}>About</Link>
              <ServicesPopper />
              <Link route={Route.Faq}>FAQ</Link>
              <Link route={Route.Gallery}>Gallery</Link>
              <Link route={Route.Testimonials}>Testimonials</Link>
              <Link route={Route.Contact}>Contact Us</Link>
            </div>
          ) : (
            <div className="header-nav-menu">
              <MenuButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
