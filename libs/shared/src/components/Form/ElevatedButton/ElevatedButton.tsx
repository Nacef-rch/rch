import { Button } from '@mui/material';

interface ElevatedButtonProps {
  text: string;
  clicked?: boolean;
  onClick?: () => void;
}

const STYLE = 'px-10 m-2 font-medium normal-case font-medium hover:bg-white hover:shadow-md';
const CLICK_STYLE = 'bg-white shadow';

export const ElevatedButton = ({ text, clicked, onClick }: ElevatedButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className={`${STYLE} ${!clicked ? 'text-gray-500' : 'text-blue-500' + ' ' + CLICK_STYLE}`}
      {...(onClick && { onClick })}
      disableElevation
    >
      {text}
    </Button>
  );
};

export default ElevatedButton;
