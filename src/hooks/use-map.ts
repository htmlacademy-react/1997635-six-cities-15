import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import type { TCityOffer } from '../types/offers';
import { TileLayerPattern } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: TCityOffer
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        TileLayerPattern.URL,
        {
          attribution:
            TileLayerPattern.ATTRIBUTION
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if(map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom);
    }
  }, [map, city]);

  return map;
}

export default useMap;
