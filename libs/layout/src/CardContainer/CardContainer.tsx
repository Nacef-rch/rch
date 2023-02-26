import { Grid } from '@mui/material';
import { Icon, Paper, ImageSlider, CustomDropDown } from '@rch/shared';
import { PropertyCard } from '@rch/features';
import { useState } from 'react';
import CardContainerHeader from './CardContainerHeader';

export function CardContainer() {
  const [person, setPerson] = useState('');
  const [person1, setPerson1] = useState('');
  return (
    <div className="shadow-lg bg-white  h-full relative">
      <Grid container spacing={1} className="sticky top-0 z-10 bg-white pt-8 px-8">
        <Grid item xs={6} md={8} className="flex items-end">
          <h4 className="text-4xl font-bold">176 Results</h4>
          <h6 className="ml-2 text-gray-500">in Sousse,Tunis</h6>
        </Grid>
        <Grid item xs={6} md={8}></Grid>

        {/*Include the first row in the container that contains search, rent/buy... */}
        <CardContainerHeader />
        <Grid item xs={12} className="mt-2">
          <div className="flex gap-5 border-b pb-8 border-slate-200">
            <CustomDropDown
              placeholder="Type All"
              icon={'HomeIcon'}
              value={person}
              setValue={setPerson}
              className="min-w-full w-40 rounded-lg"
            />
            <CustomDropDown
              placeholder="any price"
              icon={'CurrencyDollarIcon'}
              value={person1}
              setValue={setPerson1}
              className="min-w-full w-40 rounded-lg"
            />
            <CustomDropDown
              placeholder="test"
              value={person}
              setValue={setPerson}
              className="min-w-full w-40 rounded-lg"
            />
          </div>
        </Grid>
      </Grid>
      <div className="grid grid-cols-3 gap-6 justify-between mt-4 px-8">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}

export default CardContainer;
