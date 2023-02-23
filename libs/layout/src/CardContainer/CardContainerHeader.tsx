import { Grid } from '@mui/material';
import { Paper,ElevatedButton, SearchInput } from '@rch/shared';
import { useState } from 'react';

enum PropertyStatus {
  ALL = 'All',
  RENT = 'Rent',
  BUY = 'buy',
}
const CardContainerHeader = () => {
  const [propertyStatus, setPropertyStatus] = useState<PropertyStatus>(PropertyStatus.ALL);
  return (
    <>
      <Grid item xs={6} md={8}>
        <Paper className="h-14 min-h-full">
          <SearchInput variant="outlined" noBorder fullWidth />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="flex justify-between h-14 min-h-full">
          <ElevatedButton
            text="Rent"
            clicked={propertyStatus === PropertyStatus.RENT}
            onClick={() => {
              setPropertyStatus(PropertyStatus.RENT);
            }}
          />
          <ElevatedButton
            text="Buy"
            clicked={propertyStatus === PropertyStatus.BUY}
            onClick={() => {
              setPropertyStatus(PropertyStatus.BUY);
            }}
          />
          <ElevatedButton
            text="All"
            clicked={propertyStatus === PropertyStatus.ALL}
            onClick={() => {
              setPropertyStatus(PropertyStatus.ALL);
            }}
          />
        </Paper>
      </Grid>
      
    </>
  );
};

export default CardContainerHeader;
