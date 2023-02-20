import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ListItemButton, ListItemText, Slider } from '@mui/material';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


export function CustomDropDown() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200}}>
        <Select
          multiple
          displayEmpty
          value={personName}
          placeholder='type'
          onChange={handleChange}
          input={<OutlinedInput />}
        >
          <Slider
  aria-label="Small steps"
  defaultValue={0.00000005}
  step={0.00000001}
  marks
  min={-0.00000005}
  max={0.0000001}
  valueLabelDisplay="auto"
/>
        </Select>
      </FormControl>
    </div>
  );
}
export default CustomDropDown;