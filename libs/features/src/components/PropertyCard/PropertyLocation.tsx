import { Icon } from '@rch/shared';
import React from 'react'

interface PropertyDescriptionProps {
  location: string
 }

const PropertyLocation = ({location}:PropertyDescriptionProps) => {
  return (
    <p className="font-normal text-sm text-gray-500 flex items-center ">
    <Icon icon="MapPinIcon" className="w-4 h-4" />
    {location}
  </p>
  )
}

export default PropertyLocation