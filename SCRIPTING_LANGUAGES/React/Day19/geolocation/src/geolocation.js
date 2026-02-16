import React from "react";

export const useGeolocation = () => {
  const [location, setLocation] = React.useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getLocation = React.useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (geoError) => {
        setError(geoError.message || "Unable to retrieve location.");
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading, getLocation };
};

const Geolocation = () => {
  const { location, error, loading, getLocation } = useGeolocation();

  return (
    <div>
      <button onClick={getLocation} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Location"}
      </button>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>Latitude: {location.latitude}</h1>
          <h1>Longitude: {location.longitude}</h1>
        </>
      )}
    </div>
  );
};

export default Geolocation;