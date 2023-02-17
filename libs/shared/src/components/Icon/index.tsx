import * as HeroIcons from '@heroicons/react/24/outline';
import { HeroIcon } from '@rch/types';

interface IconProps {
  icon: HeroIcon;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  const SingleIcon = HeroIcons[icon];
  return <SingleIcon className={className} />;
};
export default Icon;
