import Popper from '@mui/material/Popper';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Link } from '@/components/Link';
import { Route } from '@/routes';

export function ServicesPopper() {
  const popperRef = useRef<HTMLDivElement | null>(null);
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const ready = Boolean(anchorElement);
  const id = 'services-menu';

  useEffect(() => {
    if (!popperRef.current) return;
    setAnchorElement(popperRef.current);
  }, [popperRef]);

  const openMenu = useCallback(() => {
    setIsHovered(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsHovered(false);
  }, []);

  const closeMenuSlowly = useCallback(() => {
    setTimeout(() => {
      closeMenu();
    }, 500);
  }, []);

  return (
    <div
      className="services-popper"
      data-name={ServicesPopper.name}
      onMouseLeave={closeMenuSlowly}
      ref={popperRef}
    >
      <div
        aria-controls={id}
        aria-describedby={id}
        aria-expanded={isHovered ? 'true' : undefined}
        aria-haspopup="true"
        className="services-popper-label"
        onMouseMove={openMenu}
        onMouseOver={openMenu}
      >
        Services
        <span className="icon-arrow-down services-icon"></span>
      </div>
      <Popper
        anchorEl={anchorElement}
        container={anchorElement}
        id={id}
        keepMounted={true}
        open={ready}
        style={{
          opacity: isHovered ? '1' : '0',
          zIndex: isHovered ? 200 : -1,
        }}
      >
        <Link route={Route.Bathrooms}>Beautiful Bathrooms</Link>
        <Link route={Route.Kitchens}>Fabulous Kitchens</Link>
        <Link route={Route.Basements}>Great Basements</Link>
      </Popper>
    </div>
  );
}
