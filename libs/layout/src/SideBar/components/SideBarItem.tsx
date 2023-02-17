import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@rch/shared';
import { HeroIcon } from '@rch/types';

interface ItemProps {
  text: string;
  icon: HeroIcon;
  open: boolean;
}

const SideBarItem = ({ text, icon, open }: ItemProps) => {
  return (
    <ListItem key={text} disablePadding sx={{ display: 'block' }} className="my-7">
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <Icon icon={icon} className="h-8 w-8 text-blue-500" />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
