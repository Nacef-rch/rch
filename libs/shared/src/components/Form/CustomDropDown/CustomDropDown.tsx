import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChildrenType, HeroIcon } from '@rch/types';
import { InputLabel, MenuItem } from '@mui/material';
import { Icon, Paper } from '@rch/shared';

const selectStyle = {
  '& .MuiSelect-select': {
    padding: '10px 0px !important',
    width: 'auto',
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.7)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.7)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.7)',
  },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
};
interface DropDownProps {
  children?: ChildrenType;
  placeholder: string;
  icon?: HeroIcon;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  //setValue: (value: string) => void;
  // onChange: (event: SelectChangeEvent<typeof personName>) => void
}

export function CustomDropDown({
  children,
  placeholder,
  icon,
  value,
  className,
  setValue,
}: DropDownProps) {
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: SelectChangeEvent<any>) => {
    const { target } = event;
    setValue(target.value);
  };
  //WORK ON COLOR VARIABLES
  return (
    <Paper
      className={`rounded-lg`}
      color={selected ? '#F9F9F9' : 'white'}
    >
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          sx={selectStyle}
          labelId="demo-simple-select-label"
          label="Age"
          className={`px-4 flex justify-between items-center cursor-pointer ${className}`}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          IconComponent={() => (
            <Icon
              icon={open ? 'ChevronDownIcon' : 'ChevronUpIcon'}
              className="w-5 h-5"
              color='black'
            />
          )}
          // multiple
          renderValue={selected => {
            if (selected.length === 0) {
              setSelected(false);
              return (
                <p className="flex gap-1 items-center">
                {icon &&  <Icon
                    icon={icon}
                    className="w-5 h-5"
                    color='black'
                  />}
                  <span className="text-stone-600 capitalize">{placeholder}</span>
                </p>
              );
            }
            setSelected(true);
            console.log(selected);
            return (
              <p className={' flex gap-1 items-center'}>
                 {icon &&  <Icon
                    icon={icon}
                    className="w-5 h-5"
                    color='black'
                  />}
                {`${placeholder} : ${selected}`}
              </p>
            );
            // return selected.join(', ');
          }}
          displayEmpty
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
        >
          {/* {children} */}
          <MenuItem value={'10'}>Ten</MenuItem>
          <MenuItem value={'20'}>Twenty</MenuItem>
          <MenuItem value={'30'}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}
export default CustomDropDown;
