import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';

import { Link } from '@/components/Link';

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

      <Link>Home</Link>
      <Link>About</Link>

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
        <Link className="sidebar-service">
          <span className="icon-arrow-right"></span>Beautiful Bathrooms
        </Link>
      ) : null}
      {open ? (
        <Link className="sidebar-service">
          <span className="icon-arrow-right"></span>Fabulous Kitchens
        </Link>
      ) : null}
      {open ? (
        <Link className="sidebar-service">
          <span className="icon-arrow-right"></span>Great Basements
        </Link>
      ) : null}

      <Link>FAQ</Link>
      <Link>Gallery</Link>
      <Link>Testimonials</Link>
      <Link>Contact Us</Link>
    </div>
  );
}
