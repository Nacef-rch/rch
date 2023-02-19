import * as HeroIcons from '@heroicons/react/24/outline';
import { HeroIcon } from '@rch/types';
import { useTheme } from '@mui/material';

interface IconProps {
  icon: HeroIcon;
  color?: string;
  className?: string;
}

export const Icon = ({ icon, className, color }: IconProps) => {
  const theme = useTheme();
  const SingleIcon = HeroIcons[icon];
  return (
    <SingleIcon className={className} style={{ color: color || theme.palette.primary.main }} />
  );
};
export default Icon;
