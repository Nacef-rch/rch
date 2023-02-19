import { Grid } from '@mui/material';
import { Icon, Paper } from '@rch/shared';
import { ElevatedButton, SearchInput } from '@rch/ui-web';
import {useState} from 'react'

const CardContainerHeader = () => {
  const [rent, setRent] = useState(false);
  return (
    <>
    <Grid item xs={6} md={8}>
          <Paper className="h-14 min-h-full">
            <SearchInput variant="outlined" noBorder fullWidth />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="flex justify-between h-14 min-h-full">
            <ElevatedButton
              text="Rent"
              clicked={rent}
              onClick={() => {
                setRent(cs => !cs);
              }}
            />
            <ElevatedButton
              text="Buy"
              clicked={!rent}
              onClick={() => {
                setRent(cs => !cs);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className='flex items-center justify-center h-14 min-h-full'>
            <Icon icon="Squares2X2Icon" className="h-7 w-7"/>
          </Paper>
        </Grid>
    </>
  )
}

export default CardContainerHeader