import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, ExternalLink, Loader2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Import marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Define the destination coordinates
const destination = [9.00521778764852, 38.80887490601392];

// Custom Leaflet icon for the user's location
const userIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom Leaflet icon for the destination (red marker)
const destinationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to fetch and display the route on the map
const FetchRoute = ({ start, destination }) => {
  const map = useMap();
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    if (!start) return;

    const fetchRoute = async () => {
      try {
        const res = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${destination[1]},${destination[0]}?overview=full&geometries=geojson`
        );
        const data = await res.json();

        if (data.routes && data.routes.length > 0) {
          const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
          setRouteCoords(coords);
          map.fitBounds(coords, { padding: [50, 50] });
        }
      } catch (err) {
        console.error('Error fetching route:', err);
      }
    };

    fetchRoute();
  }, [start, destination, map]);

  if (!routeCoords.length) return null;

  return (
    <>
      <Polyline 
        positions={routeCoords} 
        color="#3B82F6" 
        weight={5} 
        opacity={0.8} 
        smoothFactor={1}
        className="drop-shadow-sm"
      />
      <Marker position={start} icon={userIcon}>
        <Popup className="font-sans">
          <div className="text-center">
            <div className="font-semibold text-blue-600">Your Location</div>
            <div className="text-sm text-gray-600">Current position</div>
          </div>
        </Popup>
      </Marker>
      <Marker position={destination} icon={destinationIcon}>
        <Popup className="font-sans">
          <div className="text-center">
            <div className="font-semibold text-red-600">Destination</div>
            <div className="text-sm text-gray-600">Alem Gebre Building</div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};

// Main Map component
const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (showRoute) {
      setIsLoadingLocation(true);
      setLocationError(null);
      
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
          setIsLoadingLocation(false);
        },
        err => {
          console.error('Error fetching location', err);
          setLocationError('Unable to get your location. Please enable location services.');
          setUserLocation(null);
          setIsLoadingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    } else {
      setUserLocation(null);
      setLocationError(null);
    }
  }, [showRoute]);

  const openGoogleMapsSearch = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=Alem%20Gebre%20Building';
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Navigation to Alem Gebre Building</h1>
          </div>
          <p className="text-gray-600 text-lg">Find your way to the destination with ease</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openGoogleMapsSearch}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              type="button"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Open in Google Maps
            </button>
            
            <button
              onClick={() => setShowRoute(!showRoute)}
              disabled={isLoadingLocation}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              type="button"
            >
              {isLoadingLocation ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Getting Location...
                </>
              ) : (
                <>
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  {showRoute ? 'Hide Route' : 'Show Route'}
                </>
              )}
            </button>
          </div>

          {/* Error message */}
          {locationError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm text-center">{locationError}</p>
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 overflow-hidden">
          <MapContainer
            center={destination}
            zoom={14}
            className="h-96 w-full rounded-xl shadow-inner"
            scrollWheelZoom={true}
            zoomControl={true}
          >
            <TileLayer
              attribution="© OpenStreetMap & CartoDB"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {/* Conditionally render FetchRoute or just the destination marker */}
            {showRoute && userLocation ? (
              <FetchRoute start={userLocation} destination={destination} />
            ) : (
              <Marker position={destination} icon={destinationIcon}>
                <Popup className="font-sans">
                  <div className="text-center">
                    <div className="font-semibold text-red-600">Destination</div>
                    <div className="text-sm text-gray-600">Alem Gebre Building</div>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-blue-600" />
            How to use
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
              <div>
                <div className="font-medium">Open in Google Maps</div>
                <div className="text-sm">Launch Google Maps for turn-by-turn navigation</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
              <div>
                <div className="font-medium">Show Route</div>
                <div className="text-sm">Display the route from your current location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;