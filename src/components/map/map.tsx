import type { TOffer } from '../../types/offers';
import { Nullable } from 'vitest';
import { Icon, Marker, layerGroup, Circle } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, LocationsData } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks';
import { selectCity } from '../../store/selectors/selectors';

type MapProps = {
  offers: TOffer[];
  activeOffer: Nullable<TOffer>;
  isOfferPage?: boolean;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

function Map ({offers, activeOffer, isOfferPage}: MapProps) : JSX.Element {
  const currentCity = useAppSelector(selectCity);
  const city = LocationsData[currentCity];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === activeOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (isOfferPage && activeOffer) {
        new Circle([activeOffer.location.latitude, activeOffer.location.longitude], {
          color: '#A5C2E0',
          fillColor: '#A5C2E0',
          fillOpacity: 0.5,
          radius: 2000
        }).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer, isOfferPage, city]);

  return (
    <section
      className={`${isOfferPage ? 'offer' : 'cities'}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
