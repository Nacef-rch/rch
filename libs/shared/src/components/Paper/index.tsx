import { ChildrenType } from '@rch/types';

interface PaperProps {
  color?: 'string';
  children: ChildrenType;
}
export const Paper = ({ color, children }: PaperProps) => {
  return (
    <div className="rounded-lg" style={{ backgroundColor: color || '#F9F9F9' }}>
      {children}
    </div>
  );
};

export default Paper;
