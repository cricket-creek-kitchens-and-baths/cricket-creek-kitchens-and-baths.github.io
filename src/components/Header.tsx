import { NavLink } from 'react-router-dom';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { MenuButton } from '@/components/MenuButton';
import { ServicesPopper } from '@/components/ServicesPopper';
import { ThemeToggle } from '@/components/ThemeToggle';
import { companyName, email, phone } from '@/content';
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
            aria-label={companyName}
            className="logo-link"
            to={Route.Home}
          >
            <svg className="svg-logo" viewBox="0 0 17.974 18.372">
              <path
                d="M54.808 48.465c-4.771-.885-.747-1.58-3.699-2.245-1.133-.098-1.538-.468-1.596-.859-.07-.479.108-.76-1.42-.705-.679.025-1.143-.186-1.225-.448-.096-.307.058-.789-.945-.516v-.608c1.801-.25 1.406.26 1.593.492.187.233 1.084-.43 2.829.163.778.264-.663.8 2.077.814 1.686.009 2.496.579 2.45.807-.223 1.124.425.933.856.924 1.883-.04 2.59.826 2.31 1.222-.42.592.06.759.35.801 5.881.857 1.493 3.343-1.512 2.663-.646-.222-2.955-.315-2.068-2.505zm-8.87-6.446-.015-8.948h17.973l-.007 17.26c-2.464-6.837-12.734-8.086-17.95-8.312Zm10.651 1.182v-1.228H55.4V43.2zm2.123-1.048-2.706-3.291h-4.758V37.84h-1.156v1.025l-.5-.006-2.67 2.762c2.716.295 5.132.41 7.574.54l1.483-2.163 2.17 2.655z"
                transform="translate(-45.923 -33.07)"
              />
            </svg>
            <Image
              alt={companyName}
              className="logo-title"
              draggable={false}
              src="/images/logo-title.png"
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
