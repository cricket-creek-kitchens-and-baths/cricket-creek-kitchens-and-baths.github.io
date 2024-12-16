import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { email, phone, title } from '@/content';
import { Route } from '@/routes';

import '@/components/header.css';

export function Header() {
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
          <div className="header-nav-links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>
              Services
              <span className="icon-arrow-down services-icon"></span>
            </Link>
            <Link>FAQ</Link>
            <Link>Gallery</Link>
            <Link>Testimonials</Link>
            <Link>Gallery</Link>
          </div>
          <div className="header-nav-menu">MENU</div>
        </div>
      </div>
    </header>
  );
}
