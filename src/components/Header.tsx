import { ThemeToggle } from '@/components/ThemeToggle';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header" data-name={Header.name}>
      <div className="header-topbar">
        <div className="header-topbar-links">
          <a>
            <i className="icon icon-phone"></i>
            <div>123-456-7890</div>
          </a>
          <a>
            <i className="icon icon-envelope-letter"></i>
            <div>email@example.com</div>
          </a>
        </div>
        <ThemeToggle />
      </div>
      <div className="header-nav">
        <a
          className="header-nav-link"
          // aria-label={CricketCreek}
          // onClick={goTo(Home)}
        >
          <img
            // alt={CricketCreek}
            className="logo"
            draggable={false}
            src="logo.png"
          />
          <img
            aria-hidden="true"
            className="logo-overlay"
            draggable={false}
            src="logo-overlay.png"
          />
        </a>
        <div>Home About Services FAQ Gallery Testimonials Contact Us</div>
      </div>
    </header>
  );
}
