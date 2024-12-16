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
        <div className="header-topbar-links">
          <Link href={`tel:${phone}`}>
            <i className="icon icon-phone"></i>
            <div>{phone}</div>
          </Link>
          <Link href={`mailto:${email}`}>
            <i className="icon icon-envelope-letter"></i>
            <div>{email}</div>
          </Link>
        </div>
        <ThemeToggle />
      </div>
      <div className="header-nav">
        <Link aria-label={title} className="header-nav-link" route={Route.Home}>
          <Image
            alt={title}
            className="logo"
            draggable={false}
            src="logo.png"
          />
          <Image
            aria-hidden={true}
            className="logo-overlay"
            draggable={false}
            src="logo-overlay.png"
          />
        </Link>
        <div>Home About Services FAQ Gallery Testimonials Contact Us</div>
      </div>
    </header>
  );
}
