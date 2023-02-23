import { ChildrenType } from '@rch/types';

interface PaperProps {
  color?: string;
  className?: string;
  children: ChildrenType;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}
export const Paper = ({ color, children,radius='lg', className }: PaperProps) => {
  return (
    <div className={`${className} rounded-${radius}  `} style={{ backgroundColor: color || '#F9F9F9' }}>
      {children}
    </div>
  );
};

export default Paper;
