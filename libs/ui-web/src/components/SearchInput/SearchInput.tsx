import { InputAdornment, TextField } from '@mui/material';
import { Icon } from '@rch/shared';
import { SEARCH_INPUT__PLACE_HOLDER } from '../../constants/searchInput.constant';

interface SearchProps {
  placeHolder?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  noBorder?: boolean;
  //onChange: (value: string) => void
}

export const SearchInput = (props: SearchProps) => {
  const { placeHolder = SEARCH_INPUT__PLACE_HOLDER, noBorder, ...rest } = props;
  return (
    <TextField
      id="outlined-error-helper-text"
      placeholder={placeHolder}
      sx={{
        ...(noBorder && !rest.error && { '& fieldset': { border: 'none' } }),
      }}
      {...rest}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon="MagnifyingGlassIcon" className="mr-1 my-0.5 h-6 w-6" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
