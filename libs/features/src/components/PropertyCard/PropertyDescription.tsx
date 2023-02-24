import { propertyStatus } from '@rch/types';
import React from 'react'

interface PropertyDescriptionProps {
 title: string;
 status?: propertyStatus;
 price: number;
}

const PropertyDescription = ({title,price}:PropertyDescriptionProps) => {
  return (
    <div className="flex justify-between mt-2">
    <h2 className="font-medium">{title}</h2>
    <p className="text-sm">
      <span className="text-lg font-bold">{`$${price}`}</span>/m
    </p>
  </div>
  )
}

export default PropertyDescription