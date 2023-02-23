import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChildrenType } from '@rch/types';
import { InputLabel, MenuItem } from '@mui/material';
import { Icon, Paper } from '@rch/shared';


const selectStyle = {
  '& .MuiSelect-select': {
    paddingRight: '5px !important',
    width:'auto',

  },
  
}
interface DropDownProps {
  children?: ChildrenType;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  //setValue: (value: string) => void;
  // onChange: (event: SelectChangeEvent<typeof personName>) => void
}

export function CustomDropDown({
  children,
  placeholder,
  value,
  className,
  setValue,
}: DropDownProps) {
  const [selected, setSelected] = React.useState(false);
  const [open,setOpen] = React.useState(false)
  const handleChange = (event: SelectChangeEvent<any>) => {
    const { target } = event;
    setValue(target.value);
  };
//WORK ON COLOR VARIABLES
  return (
    <Paper className={`rounded-lg ${selected && 'shadow-lg'}`} color={selected ? '#456AF2' : '#F9F9F9'}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          sx={selectStyle}
          
          labelId="demo-simple-select-label"
          label="Age"
          className={`flex justify-center items-center ${className}`}
          onOpen={()=>setOpen(true)}
          onClose={()=>setOpen(false)}
          IconComponent = {() => (
             <Icon icon={open ? 'ChevronDownIcon' : 'ChevronUpIcon'} className="w-5 h-5" color={selected ? 'white' : '#456AF2'}/>
          )}
          // multiple
          renderValue={selected => {
            if (selected.length === 0) {
              setSelected(false)
              return <p>{placeholder}</p>;
            }
            setSelected(true);
            console.log(selected);
            return <p className={selected ? 'text-blue-50' : 'text-black'}>{`${placeholder} : ${selected}`}</p>;
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
