import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        lat: null,
        lng: null,
        loading: false,
        error: "Geolocation not supported",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false,
          error: null,
        });
      },
      (error) => {
        setLocation({
          lat: null,
          lng: null,
          loading: false,
          error: error.message,
        });
      }
    );
  }, []);

  return location;
}
