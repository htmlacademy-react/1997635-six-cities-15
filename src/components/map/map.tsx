import type { TOffer } from '../../types/offers';
import { Nullable } from 'vitest';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  offers: TOffer[];
  activeOffer: Nullable<TOffer>;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({offers, activeOffer}: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeOffer);

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
            activeOffer !== null && offer.id === activeOffer?.id
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
