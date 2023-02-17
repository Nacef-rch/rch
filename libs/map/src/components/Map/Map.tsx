import styles from './map.module.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import { AppProps } from 'next/app';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Map(props: Props) {
  const { children } = props;
  return (
    <>
      <MapContainer
        className={`${styles['map-container']}`}
        center={[35.755791, 10.715594]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <div className="z-50 flex relative">
        {children}
      </div>
    </>
  );
}
export default Map;
