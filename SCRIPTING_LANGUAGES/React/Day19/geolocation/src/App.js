import React from "react";
import { useGeolocation } from "./geolocation";

const App = () => {
  const { location, error, loading, getLocation } = useGeolocation();

  return (
    <div>
      <h1>Geolocation App</h1>
      <button onClick={getLocation} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Location"}
      </button>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{JSON.stringify(location)}</p>
      )}
    </div>
  );
};

export default App;
