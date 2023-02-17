import { useSelector } from 'react-redux';
import { RootState } from '@rch/store';
import Alert from '@mui/material/Alert';
import { Box, Button, Grid } from '@mui/material';
import { pb, currentUser } from '@rch/pocketbase';
import { SideBar, CardContainer } from '@rch/ui-web';

import { Marker, MapContainer, TileLayer, Popup } from 'react-leaflet';
import { Map } from '@rch/map';

export function Index() {
  const test = useSelector((store: RootState) => store.counter.value);
  const login = async (): Promise<void> => {
    await pb.collection('users').authWithPassword('nacef', '97084602');
  };
  return (
    <Box>
      <Map>
        <SideBar />
        <Grid container spacing={2} sx={{ flexGrow: 1, p: 3 }}>
          <Grid item xs={12} md={7}>
            <CardContainer />
          </Grid>
        </Grid>
      </Map>
    </Box>
  );
}

export default Index;
