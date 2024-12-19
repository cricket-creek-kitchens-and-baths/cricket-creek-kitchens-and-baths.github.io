import { NavLink } from 'react-router-dom';

import { Route } from '@/routes';

export function Sidebar({
  handleClose,
  handleToggle,
  open,
}: {
  handleClose: ClickHandler;
  handleToggle: ClickHandler;
  open: boolean;
}) {
  return (
    <aside className="sidebar">
      <div
        aria-label="Close Menu"
        className="close-menu-button"
        onClick={handleClose}
      >
        <div>Close Menu</div>
        <span className="icon-close"></span>
      </div>

      <NavLink onClick={handleClose} to={Route.Home}>
        Home
      </NavLink>
      <NavLink onClick={handleClose} to={Route.About}>
        About
      </NavLink>

      <div className="toggle-services" onClick={handleToggle}>
        <div>Services</div>
        {open ? (
          <span className="icon-minus"></span>
        ) : (
          <span className="icon-plus"></span>
        )}
      </div>

      {open ? (
        <NavLink
          className="sidebar-service"
          onClick={handleClose}
          to={Route.Bathrooms}
        >
          <span className="icon-arrow-right"></span>Beautiful Bathrooms
        </NavLink>
      ) : null}
      {open ? (
        <NavLink
          className="sidebar-service"
          onClick={handleClose}
          to={Route.Kitchens}
        >
          <span className="icon-arrow-right"></span>Fabulous Kitchens
        </NavLink>
      ) : null}
      {open ? (
        <NavLink
          className="sidebar-service"
          onClick={handleClose}
          to={Route.Basements}
        >
          <span className="icon-arrow-right"></span>Great Basements
        </NavLink>
      ) : null}

      <NavLink onClick={handleClose} to={Route.Faq}>
        FAQ
      </NavLink>
      <NavLink onClick={handleClose} to={Route.Gallery}>
        Gallery
      </NavLink>
      <NavLink onClick={handleClose} to={Route.Testimonials}>
        Testimonials
      </NavLink>
      <NavLink onClick={handleClose} to={Route.Contact}>
        Contact Us
      </NavLink>
    </aside>
  );
}
