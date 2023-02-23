import { Grid } from '@mui/material';
import { Icon, Paper, ImageSlider,CustomDropDown } from '@rch/shared';
import {PropertyCard} from '@rch/features';
import { useState } from 'react';
import CardContainerHeader from './CardContainerHeader';



export function CardContainer() {
  const [person, setPerson] = useState('');
  const [person1, setPerson1] = useState('');
  return (
    <div className="shadow-lg bg-white rounded-lg p-8 h-full">
      <Grid container spacing={3}>
        {/*Include the first row in the container that contains search, rent/buy... */}
        <CardContainerHeader />
        <Grid item xs={12}>
          {/*<Paper className="flex justify-around p-4">
             <CustomDropDown placeholder='test' value={person} setValue={setPerson} className="min-w-full w-40 rounded-lg" />
          <CustomDropDown placeholder='test' value={person1} setValue={setPerson1} className="min-w-full w-40 rounded-lg" />
          <CustomDropDown placeholder='test' value={person} setValue={setPerson} className="min-w-full w-40 rounded-lg" />
          <CustomDropDown placeholder='test' value={person1} setValue={setPerson1} className="min-w-full w-40 rounded-lg" />
          <CustomDropDown placeholder='test' value={person} setValue={setPerson} className="min-w-full w-40 rounded-lg" /> 
          </Paper>*/}
          <div className="grid grid-cols-3 gap-6 justify-between">
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />


          
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardContainer;
