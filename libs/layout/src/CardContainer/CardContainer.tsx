import { Grid } from '@mui/material';
import { Paper } from '@rch/shared';
import { CustomDropDown } from '@rch/ui-web';
import CardContainerHeader from './CardContainerHeader';

export function CardContainer() {
  return (
    <div className="shadow-lg bg-white rounded-lg p-8 h-full">
      <Grid container spacing={3}>
        {/*Include the first row in the container that contains search, rent/buy... */}
        <CardContainerHeader />
        <Grid item xs={12}>
          <Paper className="flex justify-around p-4">
            <CustomDropDown/>
            <CustomDropDown/>
            <CustomDropDown/>
            <CustomDropDown/>
            <CustomDropDown/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardContainer;
