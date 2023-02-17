import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@rch/store';
import Alert from '@mui/material/Alert';
import { Box, Button, Grid } from '@mui/material';
import { pb, currentUser } from '@rch/pocketbase';
import { SideBar, CardContainer } from '@rch/ui-web';


import { Marker,MapContainer,TileLayer,Popup } from 'react-leaflet';


export function Index() {
  const test = useSelector((store: RootState) => store.counter.value);
  const login = async (): Promise<void> => {
    await pb.collection('users').authWithPassword('nacef', '97084602');
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <div id="MAP">
        <Grid container spacing={2} sx={{ flexGrow: 1, p: 3 }}>
          <Grid item xs={6} md={6}>
            <CardContainer />
          </Grid>
          <Grid item xs={6} md={6}>
            {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer> */}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default Index;
