import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';

import { Link } from '@/components/Link';
import { Route } from '@/routes';

export type SidebarProps = {
  handleClose: MouseEventHandler<HTMLDivElement>;
};
export function Sidebar({ handleClose }: SidebarProps) {
  // const maxWidth = useMaxWidth();

  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  // const closeAll = useCallback((event) => {
  //   setOpen(false);
  //   handleClose(event);
  // }, []);

  return (
    <div className="sidebar">
      <div className="close-menu-button" onClick={handleClose}>
        <div>Close Menu</div>
        <span className="icon-close"></span>
      </div>

      <Link route={Route.Home}>Home</Link>
      <Link route={Route.About}>About</Link>

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
        <Link className="sidebar-service" route={Route.Bathrooms}>
          <span className="icon-arrow-right"></span>Beautiful Bathrooms
        </Link>
      ) : null}
      {open ? (
        <Link className="sidebar-service" route={Route.Kitchens}>
          <span className="icon-arrow-right"></span>Fabulous Kitchens
        </Link>
      ) : null}
      {open ? (
        <Link className="sidebar-service" route={Route.Basements}>
          <span className="icon-arrow-right"></span>Great Basements
        </Link>
      ) : null}

      <Link route={Route.Faq}>FAQ</Link>
      <Link route={Route.Gallery}>Gallery</Link>
      <Link route={Route.Testimonials}>Testimonials</Link>
      <Link route={Route.Contact}>Contact Us</Link>
    </div>
  );
}
