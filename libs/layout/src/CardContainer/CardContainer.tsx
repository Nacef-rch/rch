import { Grid } from '@mui/material';
import { Icon, Paper, ImageSlider,CustomDropDown } from '@rch/shared';
import { useState } from 'react';
import CardContainerHeader from './CardContainerHeader';

const slides = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
];

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
          <div className="flex flex-wrap justify-between">
            <div className="bg-indigo-30 rounded-lg overflow-hidden flex flex-col">
              <img
                className="object-cover h-48 w-80 rounded-lg"
                src="https://a0.muscache.com/im/pictures/7402311d-4e05-40ac-9e6d-6c9605745b79.jpg?im_w=960"
                alt="prod"
              />
              <div className="flex justify-between mt-2">
                <h2 className="font-medium">Cozy Central Apartment</h2>
                <p className="text-sm">
                  <span className="text-lg font-bold">$5300</span>/m
                </p>
              </div>
              <p className="font-normal text-sm text-gray-500 flex items-center ">
                <Icon icon="MapPinIcon" className="w-4 h-4" />
                Maatmeur Sahline, Monastir
              </p>
              <div className="flex mt-3 items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">50 m²</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-30 rounded-lg overflow-hidden flex flex-col">
              <img
                className="object-cover h-48 w-80 rounded-lg"
                src="https://a0.muscache.com/im/pictures/7402311d-4e05-40ac-9e6d-6c9605745b79.jpg?im_w=960"
                alt="prod"
              />
              <div className="flex justify-between mt-2">
                <h2 className="font-medium">Cozy Central Apartment</h2>
                <p className="text-sm">
                  <span className="text-lg font-bold">$5300</span>/m
                </p>
              </div>
              <p className="font-normal text-sm text-gray-500 flex items-center ">
                <Icon icon="MapPinIcon" className="w-4 h-4" />
                Maatmeur Sahline, Monastir
              </p>
              <div className="flex mt-3 items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">50 m²</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-30 rounded-lg overflow-hidden flex flex-col">
              <ImageSlider slides={slides} title={'a home that'} className="h-48 w-80" rounded="xl"/>
              <div className="flex justify-between mt-2">
                <h2 className="font-medium">Cozy Central Apartment</h2>
                <p className="text-sm">
                  <span className="text-lg font-bold">$5300</span>/m
                </p>
              </div>
              <p className="font-normal text-sm text-gray-500 flex items-center ">
                <Icon icon="MapPinIcon" className="w-4 h-4" />
                Maatmeur Sahline, Monastir
              </p>
              <div className="flex mt-3 items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">1 bedroom</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-indigo-50 p-2 rounded-lg mr-2">
                    <Icon icon="HomeIcon" className="w-4 h-4" />
                  </div>
                  <p className="font-light text-sm">50 m²</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardContainer;
