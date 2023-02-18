import { Button, Grid } from '@mui/material';
import { Icon, Paper } from '@rch/shared';
import SearchInput from 'libs/ui-web/src/components/SearchInput';
export function CardContainer() {
  return (
    <div className="shadow-lg bg-white rounded-lg p-8 h-full">
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} >
          <Paper>
            <SearchInput variant="outlined" noBorder fullWidth />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
          <Button variant="contained" color='primary' disableElevation>Rent</Button>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper>
            <p>DISPLAY</p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <p>text</p>
          </Paper>
        </Grid>
      </Grid>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, quam praesentium
      ratione debitis laboriosam architecto maxime asperiores repellendus vitae, aliquam expedita
      qui quo. Dignissimos delectus natus tenetur repellat nihil doloremque molestias.
      Reprehenderit, nostrum modi totam molestias quo nemo eveniet nesciunt, soluta aut cum
      voluptatum aspernatur veritatis pariatur provident amet.
      {/* className="h-6 w-6 text-blue-500" */}
      <Icon icon="HomeIcon" className="h-6 w-6 text-blue-500" />
    </div>
  );
}

export default CardContainer;
