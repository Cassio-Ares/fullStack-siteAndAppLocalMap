//hook que vai usar a localização do brouzer para localizar o usando navigator.geolocation

import { useEffect, useState } from "react";

const defaultCoords = [-23.55052, -46.63308];

export default function useGeoLocation() {
  const [coords, setCoords] = useState<Array<number> | null>(null);

  useEffect(() => {
    function onSucess(position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    }

    function onError() {
      console.log("error on get location");
      setCoords(defaultCoords);
    }

    try {
      navigator.geolocation.getCurrentPosition(onSucess, onError);
    } catch (error) {
      setCoords(defaultCoords);
    }
  }, []);

  return { coords };
}
