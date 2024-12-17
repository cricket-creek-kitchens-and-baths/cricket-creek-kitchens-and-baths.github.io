import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Route } from '@/routes';

export type SidebarProps = {
  handleClose: MouseEventHandler<HTMLDivElement & HTMLAnchorElement>;
};
export function Sidebar({ handleClose }: SidebarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className="sidebar">
      <div className="close-menu-button" onClick={handleClose}>
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

      {/* handleClose={closeAll} */}
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
    </div>
  );
}
