import Drawer from '@mui/material/Drawer';
import { useCallback, useState } from 'react';

import { Sidebar } from '@/components/Sidebar';

export function MenuButton() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openServices, setOpenServices] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpenSidebar(true);
  }, []);

  const handleClose: ClickHandler = useCallback((event) => {
    event.stopPropagation();
    setOpenSidebar(false);
    setOpenServices(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpenServices((isOpen) => !isOpen);
  }, []);

  return (
    <div
      className="menu-button"
      data-name={MenuButton.name}
      onClick={handleOpen}
    >
      <span className="icon-menu"></span>
      <div className="menu-button-label">Menu</div>
      <Drawer
        anchor="left"
        // https://github.com/mui/material-ui/issues/43106#issuecomment-2314809028
        closeAfterTransition={false}
        keepMounted={true}
        onClose={handleClose}
        open={openSidebar}
      >
        <Sidebar
          handleClose={handleClose}
          handleToggle={handleToggle}
          open={openServices}
        />
      </Drawer>
    </div>
  );
}
