import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';

import { HomeModernIcon } from '@heroicons/react/24/outline';
import { Drawer } from './components/SideBarDrawer';
import { anonymousUserSideBar, SideBarFooter } from '@rch/core';
import SideBarItem from './components/SideBarItem';

export function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <IconButton>
        <HomeModernIcon className="h-8 w-8 text-blue-500" />
      </IconButton>
      <List className="pt-14">
        {anonymousUserSideBar.map((item, index) => (
          <SideBarItem key={item.title} text={item.title} icon={item.icon} open={open} />
        ))}
      </List>
      <List className="mt-auto">
        {SideBarFooter.map((item, index) => (
          <SideBarItem key={item.title} text={item.title} icon={item.icon} open={open} />
        ))}
      </List>
    </Drawer>
  );
}
export default SideBar;
