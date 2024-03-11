import type { TCityOffer, TOffer } from '../../types/offers';
import { Nullable } from 'vitest';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  offers: TOffer[];
  activeOffer: Nullable<TOffer>;
  city: TCityOffer;
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

function Map ({offers, activeOffer, city}: MapProps) : JSX.Element {
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

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        ref={mapRef}
      >
      </section>
    </div>
  );
}

export default Map;
