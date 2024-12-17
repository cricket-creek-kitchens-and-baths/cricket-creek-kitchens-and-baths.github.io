import { NavLink } from 'react-router-dom';

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
          <NavLink
            aria-label={title}
            className="logo-link"
            to={Route.Home}
          >
            <Image
              alt={title}
              className="logo"
              draggable={false}
              // height="122"
              src="/images/logo.png"
              // width="357"
            />
            <Image
              aria-hidden={true}
              className="logo-overlay"
              draggable={false}
              src="/images/logo-overlay.png"
            />
          </NavLink>

          {isXLarge ? (
            <div className="header-nav-links">
              <NavLink to={Route.Home}>Home</NavLink>
              <NavLink to={Route.About}>About</NavLink>
              <ServicesPopper />
              <NavLink to={Route.Faq}>FAQ</NavLink>
              <NavLink to={Route.Gallery}>Gallery</NavLink>
              <NavLink to={Route.Testimonials}>Testimonials</NavLink>
              <NavLink to={Route.Contact}>Contact Us</NavLink>
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
