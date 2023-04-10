import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';

export const MarkerIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: iconShadow,
  iconSize:[25,41],
  iconAnchor:[12.5,41],
  popupAnchor:[1,-32]
});