import { useSelector } from 'react-redux';
import { RootState } from '@rch/store';
import { Box, Grid, NoSsr, Slide } from '@mui/material';
import { pb, currentUser } from '@rch/pocketbase';
import { SideBar, CardContainer } from '@rch/layout';
import { Map } from '@rch/map';
import { Icon, Paper } from '@rch/shared';
import { useState } from 'react';

export function Index() {
  const [showCardContainer, setShowCardContainer] = useState(true);
  const test = useSelector((store: RootState) => store.counter.value);
  const login = async (): Promise<void> => {
    await pb.collection('users').authWithPassword('nacef', '97084602');
  };
  return (
    <Box>
      <Map>
        <SideBar />
        {/* sx={{ flexGrow: 1, p: 3 }} */}
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {showCardContainer && (
            <Grid item xs={12} md={7}>
              <CardContainer />
            </Grid>
          )}
          <Grid item xs={1} md={1}>
            <div
              className="bg-white rounded-lg w-fit p-2 shadow-xl hover:bg-slate-50 cursor-pointer flex items-center"
              onClick={() => {
                setShowCardContainer(cs => !cs);
              }}
            >
              
              <Icon icon={showCardContainer ? "ChevronLeftIcon" : "ChevronRightIcon"} className="w-5 h-5" />
              {!showCardContainer && <p>Show List</p>}
            </div>
          </Grid>
        </Grid>
      </Map>
    </Box>
  );
}

export default Index;
