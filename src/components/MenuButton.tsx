import Drawer from '@mui/material/Drawer';
import { useCallback, useState } from 'react';

import type { SidebarProps } from '@/components/Sidebar';
import { Sidebar } from '@/components/Sidebar';

export function MenuButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose: SidebarProps['handleClose'] = useCallback((event) => {
    event.stopPropagation();
    setOpen(false);
  }, []);

  return (
    <div
      className="menu-button"
      data-name={MenuButton.name}
      onClick={handleOpen}
    >
      <span className="icon-menu"></span>
      <div className="menu-button-label">Menu</div>
      <Drawer anchor="left" onClose={handleClose} open={open}>
        <Sidebar handleClose={handleClose} />
      </Drawer>
    </div>
  );
}
