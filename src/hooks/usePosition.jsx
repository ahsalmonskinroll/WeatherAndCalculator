import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Tarayıcınız konum servisini desteklemiyor.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (error) => console.error("Konum alınamadı", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return position;
};

export default usePosition;
