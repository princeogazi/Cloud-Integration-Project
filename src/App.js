// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css'; // Import external library for styling

// Google Maps API key
const apiKey = 'AIzaSyA6tev8rqm6m52bs0NJkEpDo6xAKZMiL-U';

// Landing page component
const App = () => {
  // State to store map coordinates
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Use effect to get user's location on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  // Render the landing page
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cloud Integration Project</h1>
        <p>Explore the map below</p>

        {/* Google Maps component */}
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap id='square'
            mapContainerStyle={{
              height: '400px',
              width: '50%',
              borderRadius: '10px',
              marginLeft: '25%'
            }}
            center={mapCenter}
            zoom={12}
          >
            {/* Marker for the center of the map */}
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>

        {/* User instructions */}
        <p>Click on the marker to see the center of the map!</p>
      </header>
    </div>
  );
};

export default App;
